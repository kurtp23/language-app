import React, { useEffect, useState } from 'react';

import AudioSearch from '../../utils/audioSearch';

// semantic ui
import { Header, Icon } from 'semantic-ui-react';

// API calls
// import API from '../../utils/API.js'

function CorrectAnswerHeader({ correctAnswer }) {
  const [audioURL, setAudioURL] = useState('');


    useEffect(() => {
      AudioSearch(correctAnswer).then((url) => {
        console.log("Sound URL: ", url)
        if (url.length > 1) {setAudioURL(url);}
      })
    
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
        {audioURL.length ? <Icon onClick={playAudio} name='assistive listening systems' /> : 'Loading Sound...'}               
      </Header>
    </>
  );
}

export default CorrectAnswerHeader;
