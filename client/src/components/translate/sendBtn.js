import React, { useEffect, useState } from "react";
import { Button, Icon } from "semantic-ui-react";

function sendBtn(props) {
  return (
    <Button animated onClick={props.onClick}>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" />
      </Button.Content>
    </Button>
  );
}
export default sendBtn;
