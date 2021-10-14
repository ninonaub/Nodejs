"use strict";

const fs = require("fs");
const path = require("path");
const mime = require("mime-types");
const {
  categories,
  homepage,
  writers,
  articles,
  global,
} = require("../../data/data.json");

async function isFirstRun() {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup",
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
}

async function setPublicPermissions(newPermissions) {
  // Find the ID of the public role
  const publicRole = await strapi
    .query("role", "users-permissions")
    .findOne({ type: "public" });

  // List all available permissions
  const publicPermissions = await strapi
    .query("permission", "users-permissions")
    .find({
      type: ["users-permissions", "application"],
      role: publicRole.id,
    });

  // Update permission to match new config
  const controllersToUpdate = Object.keys(newPermissions);
  const updatePromises = publicPermissions
    .filter((permission) => {
      // Only update permissions included in newConfig
      if (!controllersToUpdate.includes(permission.controller)) {
        return false;
      }
      if (!newPermissions[permission.controller].includes(permission.action)) {
        return false;
      }
      return true;
    })
    .map((permission) => {
      // Enable the selected permissions
      return strapi
        .query("permission", "users-permissions")
        .update({ id: permission.id }, { enabled: true });
    });
  await Promise.all(updatePromises);
}

function getFileSizeInBytes(filePath) {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats["size"];
  return fileSizeInBytes;
}

function getFileData(fileName) {
  const filePath = `./data/uploads/${fileName}`;

  // Parse the file metadata
  const size = getFileSizeInBytes(filePath);
  const ext = fileName.split(".").pop();
  const mimeType = mime.lookup(ext);

  return {
    path: filePath,
    name: fileName,
    size,
    type: mimeType,
  };
}

// Create an entry and attach files if there are any
async function createEntry({ model, entry, files }) {
  try {
    const createdEntry = await strapi.query(model).create(entry);
    if (files) {
      await strapi.entityService.uploadFiles(createdEntry, files, {
        model,
      });
    }
  } catch (e) {
    console.log("model", entry, e);
  }
}

async function importCategories() {
  return Promise.all(
    categories.map((category) => {
      return createEntry({ model: "category", entry: category });
    })
  );
}

async function importHomepage() {
  const files = {
    "seo.shareImage": getFileData("default-image.png"),
  };
  await createEntry({ model: "homepage", entry: homepage, files });
}

async function importWriters() {
  return Promise.all(
    writers.map(async (writer) => {
      const files = {
        picture: getFileData(`${writer.email}.jpg`),
      };
      return createEntry({
        model: "writer",
        entry: writer,
        files,
      });
    })
  );
}

// Randomly set relations on Article to avoid error with MongoDB
function getEntryWithRelations(article, categories, authors) {
  const isMongoose = strapi.config.connections.default.connector == "mongoose";

  if (isMongoose) {
    const randomRelation = (relation) =>
      relation[Math.floor(Math.random() * relation.length)].id;
    delete article.category.id;
    delete article.author.id;

    return {
      ...article,
      category: {
        _id: randomRelation(categories),
      },
      author: {
        _id: randomRelation(authors),
      },
    };
  }

  return article;
}

async function importArticles() {
  const categories = await strapi.query("category").find();
  const authors = await strapi.query("writer").find();

  return Promise.all(
    articles.map((article) => {
      // Get relations for each article
      const entry = getEntryWithRelations(article, categories, authors);

      const files = {
        image: getFileData(`${article.slug}.jpg`),
      };

      return createEntry({
        model: "article",
        entry,
        files,
      });
    })
  );
}

async function importGlobal() {
  const files = {
    favicon: getFileData("favicon.png"),
    "defaultSeo.shareImage": getFileData("default-image.png"),
  };
  return createEntry({ model: "global", entry: global, files });
}

async function importSeedData() {
  // Allow read of application content types
  await setPublicPermissions({
    global: ["find"],
    homepage: ["find"],
    article: ["find", "findone"],
    category: ["find", "findone"],
    writer: ["find", "findone"],
  });

  // Create all entries
  await importCategories();
  await importHomepage();
  await importWriters();
  await importArticles();
  await importGlobal();
}


'use strict';
const {
    findUser,
    createUser,
    userExists,
    getUsersInRoom,
    deleteUser
} = require('./utils/database');

module.exports = async () => {
  const shouldImportSeedData = await isFirstRun();

  if (shouldImportSeedData) {
    try {
      console.log("Setting up the template...");
      await importSeedData();
      console.log("Ready to go");
    } catch (error) {
      console.log("Could not import seed data");
      console.error(error);
    }
  }
  var io = require('socket.io')(strapi.server, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
  });

  io.on('connection', function(socket) {
      socket.on('join', async({ username, room }, callback) => {
          try {
              const userExists = await findUser(username ,12);

              if(userExists.length > 0) {
                  callback(`User ${username} already exists in room no${room}. Please select a different name or room`);
              } else {
                  const user = await createUser({
                      username: username,
                      room: room,
                      status: "ONLINE",
                      socketId: socket.id
                  });

                  if(user) {
                      socket.join(user.room);
                      socket.emit('welcome', {
                          user: 'bot',
                          text: `${user.username}, Welcome to room ${user.room}.`,
                          userData: user
                      });
                      socket.broadcast.to(user.room).emit('message', {
                          user: 'bot',
                          text: `${user.username} has joined`,
                      });

                  } else {
                      callback(`user could not be created. Try again!`)
                  }
              }
              callback();
          } catch(err) {
              console.log("Err occured, Try again!", err);
          }
      })
      socket.on('sendMessage', async(data, callback) => {
            try {
                const user = await userExists(data.userId);
                if(user) {
                    io.to(user.room).emit('message', {
                        user: user.username,
                        text: data.message,
                    });
                    io.to(user.room).emit('roomInfo', {
                      room: user.room,
                      users: await getUsersInRoom(user.room)
                  });
                } else {
                    callback(`User doesn't exist in the database. Rejoin the chat`)
                }
                callback();
            } catch(err) {
                console.log("err inside catch block", err);
            }
          });
      socket.on('disconnect', async(data) => {
            try {
                console.log("DISCONNECTED!!!!!!!!!!!!");
                const user = await deleteUser( socket.id);
                console.log("deleted user is", user)
                if(user.length > 0) {
                    io.to(user[0].room).emit('message', {
                        user: user[0].username,
                        text: `User ${user[0].username} has left the chat.`,
                    });
                    io.to(user.room).emit('roomInfo', {
                        room: user.room,
                        users: await getUsersInRoom(user[0].room)
                    });
                }
            } catch(err) {
                console.log("error while disconnecting", err);
            }
    });
  });
};
