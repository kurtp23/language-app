import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function sendBtn(props) {
  return (
    <Button circular={true} centered={true} animated onClick={props.onClick}>
      <Button.Content visible>Translate</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
  );
}
export default sendBtn;
