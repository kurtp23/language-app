import React, { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
// import { translate } from "web-translate";

import InputField from "../../components/translate/testField.js";
import Message from "../../components/translate/messageField.js";
import SendBtn from "../../components/translate/sendBtn.js";
import Translate from "../../utils/spanish.js";
import { Card, Container } from "semantic-ui-react";

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
    console.log(arr);
  };

  return (
    <div>
      <Message
        send={sentMessage}
        translate={translateMessage}
        fl={fl}
        onClick={onSend}
        handleInputChange={handleInputChange}
      />
      <Header inverted textAlign={"centered"}>
        Translate Words Below
      </Header>
      <Container>
        <Card centered={true}>
          <InputField centered={true} handleInputChange={handleInputChange} />
          <SendBtn centered={true} onClick={onSend} />
        </Card>
      </Container>
    </div>
  );
}
export default Bot;
