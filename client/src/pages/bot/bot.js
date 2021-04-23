import React, { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
// import { translate } from 'web-translate';

import InputField from "../../components/translate/testField.js";
import Message from "../../components/translate/messageField.js";
import SendBtn from "../../components/translate/sendBtn.js";
import Translate from "../../utils/spanish.js";
import { Card, Container } from "semantic-ui-react";

import translate from "translate";

function Bot(props) {
  const [message, setMessage] = useState("");
  const [sentMessage, setMessageSend] = useState("");
  const [translateMessage, setTranslate] = useState([]);
  const [fl, setFl] = useState([]);
  const [tArr, setArr] = useState([]);

  const googleTranslate = async () => {
    const lang = props.userState.language;
    console.log(lang);

    translate(message, {
      from: "en",
      to: lang,
      engine: "google",
      key: "AIzaSyCBNb7aSu6QxdN3zVkR7ZxKGcMBbPMbJiU",
    }).then((text) => {
      console.log(text); // Hola mundo
    });
  };

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
      console.log("this is arr", data.data);
      setArr(data.data);
      setTranslate([data.data[0].shortdef[0], data.data[1].shortdef[0], data.data[2].shortdef[0]]);
      setFl([data.data[0].fl, data.data[1].fl, data.data[2].fl]);
    });
    console.log(arr);
  };

  return (
    <div>
      <Header inverted textAlign={"centered"}>
        Translate Words Below
      </Header>
      <Message
        send={sentMessage}
        translate={translateMessage}
        fl={fl}
        onClick={googleTranslate}
        handleInputChange={handleInputChange}
        tArr={tArr}
      />
      <br />
      <Container>
        <Card centered={true}>
          <InputField centered={true} handleInputChange={handleInputChange} />
          <SendBtn centered={true} onClick={googleTranslate} />
        </Card>
      </Container>
    </div>
  );
}
export default Bot;
