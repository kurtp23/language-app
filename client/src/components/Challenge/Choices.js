import React, { useEffect } from 'react'

import CorrectAnswerHeader from './CorrectAnswerHeader.js';
import Choice from './Choice.js'

import { Card } from 'semantic-ui-react';

function Choices({ choices, onStatusChange }){
    const [choiceRecord, setChoiceRecord] = React.useState(choices)
    const [selectable, setSelectable] = React.useState([])
    const [correctAns, setCorrectAns] = React.useState('')

    useEffect(() => {
        selectFourChoices(choices)
    }, [choices])

    function selectFourChoices(arr) {
        let newData = []
        
        let i = 0
        while (newData.length < 4 && i < arr.length) {
            
            newData.push(arr[i])
            
            i++
        }

        setChoiceRecord(arr)
        setSelectable(newData)
        pickCorrect(newData)
        
    }

    function pickCorrect(arr) {
        const randNum = Math.floor(Math.random() * 4)
        setCorrectAns(arr[randNum].lang)
    }

    function handleCorrect(ans){
        onStatusChange(ans === correctAns)
    }

    const renderChoices = selectable.map((choice, i) => {
        const isCorrect = correctAns === choice.lang
        return (
            <Choice key={i} name={choice.eng} value={choice.lang} correct={isCorrect} onPicked={handleCorrect} />
        )
    })


    return (
        <>  
            <CorrectAnswerHeader correctAnswer={correctAns} />
            <Card.Group itemsPerRow={2}>
                {renderChoices}
            </Card.Group>
        </>
    )
}

export default Choices;
