import React from "react";

import { Card } from "semantic-ui-react";

import LoginBtn from "./LoginBtn.js";
import "./login.css";

const LoginCard = (props) => (
  <Card centered={true}>
    <Card.Content textAlign="center" />
    <Card.Content textAlign="center">
      <LoginBtn login={props.login} />
    </Card.Content>
    <Card.Content></Card.Content>
  </Card>
);

export default LoginCard;
