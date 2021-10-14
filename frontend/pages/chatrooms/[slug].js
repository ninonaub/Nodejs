import React, { useEffect, useState } from 'react';
import { fetchAPI } from "../../lib/api"
import { socket } from '../../config/web-sockets';
import Messages from '../../components/messages';
import UserList from '../../components/UserList';
import Router from 'next/router'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Input, Card, Button } from 'antd';

const ChatRoom = ({})=> {
    console.log('router',Router)
    const {username, room, userID} = Router.router.query
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const seo = {
      metaTitle: 'ChatRoom',
      metaDescription: 'ChatRoom',
    }

    const handleChange = (e) => {
      setMessage(e.target.value);
    }

    const handleClick = (e) => {
      console.log('click')
      sendMessage(message);
    }
    const sendMessage = (message) => {
          if(message) {
              socket.emit('sendMessage',{ userId: userID, message }, (error) => {
                  if(error) {
                      alert(error)
                      Router.push('/chat');
                  }
                  // else {
                  //   socket.on('message', (message, error) => {
                  //     console.log('slug ms', [ ...messages, message])
                  //     setMessages(msgs => [ ...msgs, message]);
                  //   });
                  //   socket.on("roomInfo", (users) => {
                  //     console.log('u',users.users)
                  //     setUsers(users.users)
                  //   });
                  // }
              });

              setMessage('')
          } else {
              alert("Message can't be empty")
          }
    }
    // socket.on('message', (message, error) => {
    //
    //   console.log('slug ms', [ ...messages, message])
    //   setMessages([ ...messages, message]);
    // });
    // socket.on("roomInfo", (users) => {
    //         console.log('u', users.users)
    //         setUsers(users.users)
    // });
    useEffect(() => {
      if(Object.keys(Router.router.query).length > 0){
            socket.on('message', (message, error) => {

              // console.log('slug ms', [ ...messages, message])
              setMessages([ ...messages, message]);
            });

        }
        else {
            Router.push('/chat')
        }
        socket.on("roomInfo", (users) => {
            console.log('u', users.users)
            setUsers(users.users)
          })
        //return () => {setUsers([]); setMessages([])};
     }, [])

       return (
         //<Layout categories={categories}>
         <>
           <Seo seo={seo} />
           <div className="uk-section">
             <div className="uk-container uk-container-large" id="chat-room">
              <h1>Room {room}</h1>
                    <div uk-grid="true">
                      <div className="uk-width-2-3@m" >

                        <Messages
                            messages={messages}
                            username={username}
                        />
                        <Input
                        className="uk-input"
                          type="text"
                          placeholder="Type your message"
                          value={message}
                          onChange={handleChange}
                        />

                        <button
                        className="uk-button-small uk-button-default uk-margin-small-top"
                          onClick={handleClick}
                        >
                          <span className="material-icons">send</span>
                        </button>
                      </div>
                      <div className="uk-width-1-3@m" >
                        <UserList users={users}/>
                      </div>
                    </div>
                </div>
            </div>
            </>
          //</Layout>
    )
};
// export async function getStaticPaths() {
//   // Run API calls in parallel
//   const categories = await fetchAPI("/categories")
//
//   return {
//     paths: categories.map((category) => ({
//       params: {
//         slug: category.slug,
//       },
//     })),
//     fallback: false,
//   }
// }
// export async function getStaticProps({ params }) {
//   const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0]
//   const categories = await fetchAPI("/categories")
//
//   return {
//     props: { category, categories },
//     revalidate: 1,
//   }
// }
export default ChatRoom;
