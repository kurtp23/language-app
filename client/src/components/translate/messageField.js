import React, { useEffect, useState } from "react";
import { Card, Icon, Container } from "semantic-ui-react";

function messageField(props) {
  return (
    <>
      {console.log("this is arr", props.tArr)}
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
