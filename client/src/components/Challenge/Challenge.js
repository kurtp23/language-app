import React, { useEffect } from 'react'

// components
import Choice from './Choice.js'

// API calls
import API from '../../utils/API.js'

function Challenge({ category }){
    // TODO LIST:
    // Add translations into the mix
    // Add Images
    // Add "Exit Game" Button
    // STYLING
    // modulation!
    const [data, setData] = React.useState([])
    const [nextData, setNextData] = React.useState([])

    const [count, setCount] = React.useState(0)

    const [answered, setAnswered] = React.useState(false)
    
    useEffect(() => {
        // get data from MongoDB
        API.getChallengeData(category)
        .then((data) => {

            let dataTransformed = []
            
            data.data.forEach((data) => {
               dataTransformed.push({
                   name: data,
                   rendered: false
               }) 
            })
            dataTransformed.sort(function() { return 0.5 - Math.random() });

            setData(dataTransformed)

        })

    }, [])

    function renderChoices() {
        let choices = []
        
        let newData = [...data]

        data.forEach((item, i) => {
            if (!item.rendered && choices.length < 4) {
                newData[i].rendered = true
                choices.push(item.name)
            }
        })
        

        console.log(choices)
        return choices

    }
    
    let choices = renderChoices()

    const correctAnswer = choices[Math.floor(Math.random() * 4)]

    function handleAnswer(e) {
        
        console.log("Answered? ", e.target.value === correctAnswer)
        if (e.target.value === correctAnswer) {
            console.log("New Render")
            let newData = [...data]

            newData.forEach(item => {
                if (item.name !== e.target.value) {
                    item.rendered = false
                }
            });
            data.sort(function() { return 0.5 - Math.random() });
            setAnswered(true)
            setCount(count + 1)
            
        }
    }
    console.log("is answered?", answered)
    console.log("Status: ", !answered && !choices)

    function handleNextClick(){
        setAnswered(false)
    }

    return (
        <>
            <h2>Challenge Game!</h2>
            <h3>Times Played: {count}</h3>
            {!answered && choices ? <p>{correctAnswer}</p> : <></>}
            {!answered && choices ? choices.map((item, i) => {return <Choice correct={correctAnswer === item} onChange={handleAnswer} key={i} value={item}>{item}</Choice>}) : <></>}
        
            {answered ? <button onClick={handleNextClick}>Click here to goto next!</button> : <></>}
            {answered ? <h3>Nice Work!</h3> : <></>}
        </>
        
    )
}

export default Challenge
