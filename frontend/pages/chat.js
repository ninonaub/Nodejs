import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import JoinRoom from '../components/screens/JoinRoom';

import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"
import Seo from "../components/seo"

import NextRouter from 'next/router'

const Chat = ({ categories }) => {
    const [username, setUsername] = useState('');
    const [data, setData] = useState([]);
    const [room, setRoom] = useState('');
    const [userID, setUserID] = useState('');
    const [chatroom, setChatRoom] = useState(false);
    function onJoinSuccess(data) {
      const d = {username : data.userData.username, room : data.userData.room, userID : data.userData.id}
        // setUserID(data.userData.id);
        // setUsername(data.userData.username);
        // setRoom(data.userData.room);
        //data.data ? setRoom(data.data) : []
        //NextRouter(true)
        NextRouter.push({pathname :`/chatrooms/${data.userData.room}`, query: d})
    }

  const seo = {
    metaTitle: 'Chat',
    metaDescription: 'Chat',
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large" id="chat-room">
          <h1>Chat room</h1>
          <JoinRoom onJoinSuccess={onJoinSuccess}/>
        </div>
      </div>
    </Layout>
  )
}
// ReactDOM.render(
//   <React.StrictMode>
//       {Chat}
//   </React.StrictMode>,
//   document.getElementById('chat-room')
// );
export async function getStaticProps() {
  // Run API calls in parallel
  const categories = await fetchAPI("/categories")

  return {
    props: { categories },
    revalidate: 1,
  }
}

export default Chat
