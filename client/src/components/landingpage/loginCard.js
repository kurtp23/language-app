import React from 'react';

import { Card } from 'semantic-ui-react';

import LoginBtn from './LoginBtn.js';
import './login.css';

const LoginCard = (props) => (
  <Card centered={true} className='loginCard'>
    <Card.Content textAlign='center'>
      Login or Create an Account Here
    </Card.Content>
    <Card.Content textAlign='center'>
      <LoginBtn login={props.login} />
    </Card.Content>
    <Card.Content></Card.Content>
  </Card>
);

export default LoginCard;
