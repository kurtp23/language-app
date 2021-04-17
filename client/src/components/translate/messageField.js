import React, { useEffect, useState } from "react";
import { Card, Icon, Container } from "semantic-ui-react";
import InputField from "../../components/translate/testField.js";
import SendBtn from "../../components/translate/sendBtn.js";

function messageField(props) {
  return (
    <>
      <Container>
        <Card centered={true}>
          <Card.Content header={"English: " + props.send} />
          <Card.Content header={"Spanish: " + props.translate} />
          <Card.Content header={props.fl} extra />
        </Card>
      </Container>
    </>
  );
}
export default messageField;
