import React, { useEffect } from 'react';

// semantic ui
import { Header, Icon } from 'semantic-ui-react';

// API calls
// import API from '../../utils/API.js'

function CorrectAnswerHeader({ correctAnswer }) {
  const [sound, setSound] = React.useState(false);
  useEffect(() => {
    console.log('Do an API to Webster to get the audio');

  }, [correctAnswer]);

  function playSound() {
    console.log('listen to sound');
    // setSound(true)
  }

  return (
    <>
      <Header textAlign='center' as='h2'>
        <Icon name='language' />
        {correctAnswer}
      </Header>
      <Header textAlign='center' as='h3'>
        {sound ? <Icon onClick={playSound} name='assistive listening systems' /> : 'Loading Sound...'}               
      </Header>
    </>
  );
}

export default CorrectAnswerHeader;
