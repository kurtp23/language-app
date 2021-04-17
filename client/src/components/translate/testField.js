import React, { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";

function InputField(props) {
  return (
    <Input
      value={props.message}
      onChange={props.handleInputChange}
      class="input is-link"
      type="text"
      placeholder="Link input"
    />
  );
}
export default InputField;
