import React, { useEffect, useState } from 'react';
import { Card, Divider, Grid, Segment } from 'semantic-ui-react';

function messageField(props) {

  const tArray = props.tArr;

  return (
    <div style={{paddingTop: '5em'}}>
      <Card centered={true}>
        <Segment>
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <Card.Content header={'English:'} />
              <Card.Content header={props.send} />
            </Grid.Column>
            <Grid.Column>
              <Card.Content header={'Spanish:'} />
              <Card.Content header={props.translate} />
            </Grid.Column>
          </Grid>
          <Divider vertical>And</Divider>
        </Segment>
      </Card>
    </div>
  );
}
export default messageField;
