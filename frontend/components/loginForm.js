import React, { useState } from "react";
import { Input, Card, Button } from 'antd';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const onUsernameChange = (e) => {
      const inputValue = e.target.value;
      setUsername(inputValue);
  }
  const onEmailChange = (e) => {
      const emailInput = e.target.value;
      setEmail(emailInput);
  }
  const onClick = () => {

      if(username && email) {
        console.log(1, username, email)
          //TODO login
      }
  }
  return (
    <div>
      <div uk-grid="true" className="uk-child-width-1-2@m uk-text-center">
        <div>
          <label htmlFor="username">
              Enter your username
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
          <label htmlFor="email">
              Enter your email
              <Input
                  className="uk-input"
                  name="email"
                  placeholder="Enter your email"
                  maxLength={25}
                  value={email}
                  onChange={onEmailChange}
              />
          </label>
        </div>
      </div>
      <button
          className="uk-button uk-button-default uk-margin-small-top"
          onClick={onClick}
      >
          Login
      </button>
    </div>
  )
};

export default LoginForm;
