import React, { useState } from "react";
import { Input, Card, Button } from 'antd';
import { socket } from '../../../config/web-sockets';
import Router from 'next/router'

function JoinRoom(props) {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [joinData, setJoinData] = useState({});
    const [error, setError] = useState('');
    const onUsernameChange = (e) => {
        const inputValue = e.target.value;
        setUsername(inputValue);
    }

    const onRoomChange = (e) => {
        const roomNo = e.target.value;
        setRoom(roomNo);
    }
    const onClick = () => {
        if(username && room) {
            socket.emit('join', { username, room }, (error) => {
                if(error) {
                    setError(error)
                    alert(error);
                } else {
                    socket.on('welcome', (data) => {
                        props.onJoinSuccess(data);
                    });
                }
            });
        }
    }
    socket.on('welcome', (data) => {
        console.log("Welcome event inside JoinRoom", data);
        props.onJoinSuccess(data);
    });
    return (
      <div>
        <div uk-grid="true" className="uk-child-width-1-2@m uk-text-center">
          <div>
            <label htmlFor="username">
                Enter your name
                <Input
                    className="uk-input"
                    name="username"
                    placeholder="Enter your username"
                    maxLength={25}
                    value={username}
                    onChange={onUsernameChange}
                />
            </label>
          </div>
          <div>
            <label htmlFor="room">
                Enter room number of your choice
                <Input
                    className="uk-input"
                    name="room"
                    placeholder="Enter your room number"
                    maxLength={25}
                    value={room}
                    onChange={onRoomChange}
                />
            </label>
          </div>
        </div>
        <button
            className="uk-button uk-button-default uk-margin-small-top"
            onClick={onClick}
        >
            Join the Chat Room
        </button>
      </div>
    )
};

export default JoinRoom;
