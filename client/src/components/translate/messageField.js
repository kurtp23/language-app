import React, { useEffect, useState } from "react";

function messageField(props) {
  return (
    <div class="box has-background-primary-light">
      <div>{props.fl}</div>
      <div>English: {props.send}</div>
      <div>spanish: {props.translate}</div>
    </div>
  );
}
export default messageField;
