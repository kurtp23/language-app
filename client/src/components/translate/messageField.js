import React, { useEffect, useState } from 'react';
import { Card, Icon, Container, Grid, Segment } from 'semantic-ui-react';

function messageField(props) {
  const tArray = props.tArr;
  return (
    <>
      {console.log('this is tarr', props.tArr)}
      <Grid centered={true} columns='5'>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Card centered={true}>
                <Card.Content header={'English: ' + props.send} />
                <Card.Content header={'Spanish: ' + props.translate[0]} />
                <Card.Content header={props.fl[0]} extra />
              </Card>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Card centered={true}>
                <Card.Content header={'English: ' + props.send} />
                <Card.Content header={'Spanish: ' + props.translate[1]} />
                <Card.Content header={props.fl[1]} extra />
              </Card>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Card centered={true}>
                <Card.Content header={'English: ' + props.send} />
                <Card.Content header={'Spanish: ' + props.translate[2]} />
                <Card.Content header={props.fl[2]} extra />
              </Card>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
export default messageField;
