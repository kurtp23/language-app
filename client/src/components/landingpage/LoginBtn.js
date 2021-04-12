import React from "react";
import { Button, Icon } from "semantic-ui-react";

const LoginBtn = (props) => (
  <div>
    <Button animated onClick={props.login} >
      <Button.Content visible  >Login With Google</Button.Content>
      <Button.Content hidden>
        <Icon name="handshake outline" />
      </Button.Content>
    </Button>
  </div>
);

export default LoginBtn;
