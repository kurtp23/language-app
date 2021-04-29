import React from 'react';
import { Divider, Segment, Container } from 'semantic-ui-react';
import LoginCard from './loginCard.js';
import './login.css';
import CardExampleCard from '../../pages/teampage/teampage.js';

const Login = (props) => (
  <div>
    <Container color='teal'>
      <Segment basic textAlign='center'>
        <Divider horizontal inverted>Welcome To Learnt-Up</Divider>
      </Segment>
      <LoginCard login={props.login} />
    </Container>
    <CardExampleCard />
  </div>
);

export default Login;
