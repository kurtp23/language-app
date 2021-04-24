import React, { useEffect, useState } from 'react';

import AudioSearch from '../../utils/audioSearch';

// semantic ui
import { Header, Icon } from 'semantic-ui-react';

// API calls
// import API from '../../utils/API.js'

function CorrectAnswerHeader({ correctAnswer }) {
  const [audioURL, setAudioURL] = useState('');


    useEffect(() => {
    (async() => {
      try {
        const url = await AudioSearch(correctAnswer);
        setAudioURL(url);
      }
      catch (err) {console.log(err);}
    })();
  }, [correctAnswer]);

  const playAudio = (e) => {
    e.stopPropagation();  
    let audio = new Audio(audioURL);
    audio.play();
  };

  return (
    <>
      <Header textAlign='center' as='h2'>
        
        <Icon name='language' />
        {correctAnswer}
      </Header>
      <Header textAlign='center' as='h4'>
        {audioURL ? <Icon onClick={playAudio} name='assistive listening systems' /> : 'Loading Sound...'}               
      </Header>
    </>
  );
}

export default CorrectAnswerHeader;
