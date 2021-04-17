import React, { useEffect, useState } from "react";
import { Card, Icon } from "semantic-ui-react";

function messageField(props) {
  return (
    <>
      <div class="box has-background-primary-light">
        <div> </div>
        <div> </div>
      </div>
      <Card>
        <Card.Content header={"English: " + props.send} />
        <Card.Content header={"Spanish: " + props.translate} />
        <Card.Content header={props.fl} extra />
      </Card>
    </>
  );
}
export default messageField;
