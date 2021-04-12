import React from "react";
import { Divider, Segment, Container } from "semantic-ui-react";
import LoginCard from "./loginCard.js";
import "./login.css";

const Login = (props) => (
  <div>
    <Container color="teal" content="teal">
      <Segment basic textAlign="center">
        this is something above split
        <Divider horizontal>Welcome To Language Learner</Divider>
        this is something below split
      </Segment>
      <LoginCard login={props.login} />
    </Container>
  </div>
);

export default Login;
