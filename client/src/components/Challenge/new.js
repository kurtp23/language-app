import React, { useEffect } from 'react';

function CorrectAnswerHeader({ correctAnswer }) {
    const [sound, setSound] = React.useState(false)
    useEffect(() => {
        console.log("Do an API to Webster to get the audio")

    }, [correctAnswer])

    function playSound() {
        console.log("listen to sound")
    }
    return (
        <>
            <Header textAlign='center' as='h1'>
                <Icon name='language' />
                {correctAnswer}
            </Header>
            <Header textAlign='center' as='h1'>
                {sound ? <Icon onClick={playSound} name='language' /> : 'Loading Sound...'}                
            </Header>
        </>
    )
}

export default CorrectAnswerHeader
