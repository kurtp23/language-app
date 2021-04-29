import React, { useState } from 'react';
import { Header } from 'semantic-ui-react';
// import { translate } from 'web-translate';

import InputField from '../../components/translate/testField.js';
import Message from '../../components/translate/messageField.js';
import SendBtn from '../../components/translate/sendBtn.js';
import { Card, Container } from 'semantic-ui-react';

import translate from 'translate';

// import dotenv from ("dotenv");
// dotenv.config()
const apiKey = process.env.REACT_APP_API_KEY;
function Bot(props) {
  const [message, setMessage] = useState('');
  const [sentMessage, setMessageSend] = useState('');
  const [translateMessage, setTranslate] = useState('');
  const [fl, setFl] = useState('');
  const [tArr, setArr] = useState('');

  const googleTranslate = async () => {
    const lang = props.userState.language;
    translate(message, {
      from: 'en',
      to: lang,
      engine: 'google',
      key: process.env.REACT_APP_API_KEY,
    }).then((text) => {

      setTranslate(text);
      setFl(lang);
      setMessageSend(message);
    });
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div style={{ paddingTop: '3em' }}>
      <Header inverted textAlign={'centered'}>
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
