import React, { useEffect, useState } from "react";

function Input(props) {
  return (
    <input
      value={props.message}
      onChange={props.handleInputChange}
      class="input is-link"
      type="text"
      placeholder="Link input"
    />
  );
}
export default Input;
