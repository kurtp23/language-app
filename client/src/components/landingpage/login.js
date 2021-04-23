import React from 'react';
import { Divider, Segment, Container } from 'semantic-ui-react';
import LoginCard from './loginCard.js';
import './login.css';
import CardExampleCard from '../../pages/teampage/teampage.js';

const Login = (props) => (
  <div>
    <Container color='teal'>
      <Segment basic textAlign='center'>
        this is something above split
        <Divider horizontal>Welcome To Language Learner</Divider>
        this is something below split
      </Segment>
      <LoginCard login={props.login} />
    </Container>
    <CardExampleCard />
  </div>
);

export default Login;
