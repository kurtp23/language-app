import React, { useEffect, useState } from "react";

// import { translate } from "web-translate";

import Input from "../../components/translate/testField.js";
import Message from "../../components/translate/messageField.js";
import SendBtn from "../../components/translate/sendBtn.js";
import Translate from "../../utils/spanish.js";

function Bot() {
  const [message, setMessage] = useState("");
  const [sentMessage, setMessageSend] = useState("");
  const [translateMessage, setTranslate] = useState("");
  const [fl, setFl] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };
  const onSend = () => {
    console.log(message);
    let arr = [];
    arr.push(message);
    for (let i = 0; i < arr.length; i++) {
      setMessageSend(arr[i]);
    }
    Translate.search(message).then((data) => {
      console.log(data.data);
      setTranslate(data.data[0].shortdef[0]);
      setFl(data.data[0].fl);
    });
  };

  return (
    <div>
      {/* <Nav /> */}
      <Message send={sentMessage} translate={translateMessage} fl={fl} />
      <Input handleInputChange={handleInputChange} />
      <SendBtn onClick={onSend} />
    </div>
  );
}
export default Bot;
