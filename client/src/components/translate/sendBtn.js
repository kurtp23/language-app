import React, { useEffect, useState } from "react";

function sendBtn(props) {
  return (
    <button onClick={props.onClick} class="button is-primary is-light">
      Send
    </button>
  );
}
export default sendBtn;
