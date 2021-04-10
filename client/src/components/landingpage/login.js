import React from "react";
import {
  Grid,
  Image,
  Button,
  Divider,
  Header,
  Icon,
  Search,
  Input,
  Segment,
  Container,
  Card,
} from "semantic-ui-react";
import LoginCard from "./loginCard.js";

const Login = (props) => (
  <Container>
    <Segment basic textAlign="center">
      this is something above split
      <Divider horizontal>Welcome To Language Learner</Divider>
      this is something below split
    </Segment>
    <LoginCard login={props.login} />
  </Container>
);

export default Login;
