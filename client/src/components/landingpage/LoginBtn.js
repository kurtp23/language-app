import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./login.css";

const LoginBtn = (props) => (
  <div>
    <Button size="huge" basic color="teal" content="teal" animated onClick={props.login}>
      <Button.Content visible>Login With Google</Button.Content>

      <Button.Content hidden>
        <Icon name="handshake outline" />
      </Button.Content>
    </Button>
  </div>
);

export default LoginBtn;
