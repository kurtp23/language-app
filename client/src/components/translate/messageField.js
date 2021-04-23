import React, { useEffect, useState } from "react";
import { Card, Icon, Container, Grid, Segment } from "semantic-ui-react";

function messageField(props) {
  const tArray = props.tArr;
  return (
    <>
      <Grid centered={true} columns="5">
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Card centered={true}>
                <Card.Content header={"English: " + props.send} />
                <Card.Content header={"Spanish: " + props.translate} />
                <Card.Content header={props.fl} extra />
              </Card>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
export default messageField;
