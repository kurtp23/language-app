import React, { useEffect } from 'react'

// components
import Choice from './Choice.js'
import EndGame from './EndGame.js'
import CorrectAnswerHeader from './CorrectAnswerHeader.js'

// API calls
import API from '../../utils/API.js'

// semantic ui
import { Card, Header, Container, Icon, Divider } from 'semantic-ui-react'

function Challenge({ category }){
    const [data, setData] = React.useState([])
    const [count, setCount] = React.useState(0)
    const [answered, setAnswered] = React.useState(false)
    
    useEffect(() => {
        // get data from MongoDB
        API.getChallengeData(category)
        .then((data) => {

            let dataTransformed = []
            
            data.data.forEach((data) => {
               dataTransformed.push({
                   eng: data.eng,
                   spa: data.spa,
                   rendered: false
               }) 
            })
            // randomizes the list
            dataTransformed.sort(function() { return 0.5 - Math.random() });
            setData(dataTransformed)
        })

    }, [category])

    function renderChoices() {
        // this gets rendered into components
        let choices = []
        // this ensures a "correct" answer isn't re-selected on next render
        let newData = [...data]
        data.forEach((item, i) => {
            if (!item.rendered && choices.length < 4) {
                newData[i].rendered = true
                choices.push(item.spa)
            }
        })
        
        return choices

    }
    
    let choices = renderChoices()

    const correctAnswer = choices[Math.floor(Math.random() * 4)]

    function handleAnswer(e) {
        
        if (e === correctAnswer) {
            // helps reset the dataset, unlocking for next round
            let newData = [...data]

            newData.forEach(item => {
                // make sure not to allow the same answer two times in a row
                if (item.name !== e) {
                    item.rendered = false
                }
            });
            data.sort(function() { return 0.5 - Math.random() });
            setAnswered(true)
            setCount(count + 1)
            
        }
    }

    function handleNextClick(){
        // this effectively gives the user the option to either EXIT or CONTINUE the game
        setAnswered(false)
    }

    function handleExit() {
        // send data to stats schema here
        const stat = {
            user: '',
            activity: 'challenge',
            value: count,
            date: new Date()
        }
        
        console.log("This will go to stats schema: ", stat)
    }

    return (
        <>
            {answered ? 
                <Container textAlign='center'><Header className="ui orange header" as='h2'><Icon name='book' />Nice Work!</Header></Container> : 
                <Container textAlign='center'><Header className="ui orange header" as='h2'><Icon name='question circle' />Match the Word to the Image!</Header></Container>
            }

            {!answered && choices ? <CorrectAnswerHeader correctAnswer={correctAnswer}/>: <></>}
            
            <Card.Group centered itemsPerRow={2}>
                {!answered && choices ? 
                    choices.map((item, i) => {
                        return <Choice correct={correctAnswer === item} onChange={handleAnswer} key={i} value={item} name={(data.find(o => o.spa === item)).eng}>{item}</Choice>}) 
                : <></>}
                
            </Card.Group>
            
            {answered ? <EndGame onContinue={handleNextClick} onExit={handleExit} count={count} category={category}/>: <></>}
            
        </>
    )
}

export default Challenge
