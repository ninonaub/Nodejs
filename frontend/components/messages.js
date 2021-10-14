import React, { useEffect, useState } from 'react';
import Router from 'next/router'
import { socket } from '../config/web-sockets';


const Messages = (props) => {
  const{messages, username} = props;
  // const username = props.username
  // const [messages, setMessages] = useState([]);
  // useEffect(() => {
  //   if(Object.keys(Router.router.query).length > 0){
  //         socket.on('message', (message, error) => {
  //           console.log(5555)
  //           console.log('slug ms', [ ...messages, message])
  //           setMessages(msgs => [ ...msgs, message]);
  //         });
  //
  //     }
  //     else {
  //         Router.push('/chat')
  //     }
  //     //return () => {setUsers([]); setMessages([])};
  //  })
    return (
        <div>
            {
              messages.map((message, i) => {
                return (
                    <div className="uk-background-muted uk-margin-small" key={i} >
                      <div
                      className={`
                              uk-padding-small
                              ${Router.router.query.username ? Router.router.query.username.trim().toLowerCase() === message.user.trim().toLowerCase() ? 'uk-background-primary ': 'uk-background-secondary': ''}
                              `}
                      style="color: #fff"
                      >
                        By <i>{message.user}</i>
                      </div>
                      <div className="uk-padding-small">{message.text}</div>
                    </div>
                )
              })
            }
        </div>
    );
}
export default Messages;
