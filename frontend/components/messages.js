import React, { useEffect, useState } from 'react';
import Router from 'next/router'
import { socket } from '../config/web-sockets';


function Messages(props) {
  const messages = props.messages;
  const username = props.username;

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
