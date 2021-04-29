import React from 'react';
import { Card, Container, Segment } from 'semantic-ui-react';

function messageField(props) {

  const tArray = props.tArr;

  return (
    <>
      <Container>
        <Segment>
          <Card centered={true} fluid={true}>
            <Card.Content header={"English: " + props.send} />
            <Card.Content header={"Translation: " + props.translate} />
            <Card.Content header={props.fl} extra />
          </Card>
        </Segment>
      </Container>
    </>
  );
}
export default messageField;
