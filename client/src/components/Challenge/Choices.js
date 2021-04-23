import React, { useEffect } from 'react'

import CorrectAnswerHeader from './CorrectAnswerHeader.js';
import Choice from './Choice.js'

import { Header, Container, Icon } from 'semantic-ui-react';

function Choices({ choices, onStatusChange }){
    const [choiceRecord, setChoiceRecord] = React.useState(choices)
    const [selectable, setSelectable] = React.useState([])
    const [correctAns, setCorrectAns] = React.useState('')

    useEffect(() => {
        randomizeChoices(choices)
    }, [choices])

    function randomizeChoices() {
        
        let newData = [...choices]
        newData.sort(function() { 
            return 0.5 - Math.random(); 
          });

        console.log("Randomized newData: ", newData)

        selectFourChoices(newData)
    }

    function selectFourChoices(arr) {
        let newData = []
        
        let i = 0
        while (newData.length < 4 && i < arr.length) {
            if (!arr[i].rendered) {
                newData.push(arr[i])
                arr[i].rendered = true
            }
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
        console.log("You Picked ", ans)
    }

    const renderChoices = selectable.map((choice, i) => {
        const isCorrect = correctAns === choice.lang
        return (
            <Choice key={i} name={choice.eng} value={choice.lang} correct={isCorrect} onPicked={handleCorrect} />
        )
    })

    console.log(renderChoices)

    console.log("This is the selectable data", selectable)
    return (
        <>  
            <Header as='h3' centered>{correctAns}</Header>
            
            {renderChoices}
        </>
    )
}

export default Choices;
