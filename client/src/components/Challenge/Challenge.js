import React, { useEffect } from 'react'

// API calls
import API from '../../utils/API.js'

function Challenge({ category }){
    // save category specific choices here, we want both the THING and a "hasBeenSelected" key so there are no repeats.
    // will render FOUR things at a time as Cards
    // need to call an API for the translations, they will be hidden
    
    // ONE of the four will RANDOMLY be assigned "Answer".
    // the "answer" value will be rendered as a visible card, the user has to click on the card they think it matches
        // add any audio cues here too, like "click to hear the word"
    // When CARD is selected, 
        // WRONG: translation is revealed, english and spanish. Can no longer select that card
        // CORRECT: a "happy" message is revealed, the rest of the cards are also revealed
            // this specific value is marked as "hasBeenSelected"
        // All cards will have the audio available to listen to if they want
        // User given option to "goto Next" or "exit"
            // goto Next => re-render the next four, do NOT re-render a "hasBeenSelected"
                // once the user hits data.length = 4 the game forces an exit

            // onExit => send up the number of rounds to the DB with the DATE of play, keep it simple for now. Add more data later
    const [data, setData] = React.useState([])
    const [count, setCount] = React.useState(0)
    const [answered, setAnswered] = React.useState([])
    
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
        data.forEach((item) => {
            if (!item.rendered && choices.length < 4) {
                choices.push(item.name)
            }
        })
        
        return choices
    }

    const choices = renderChoices()

    function handleChoice(e) {
        console.log(e.target.value)
        // somehow get the picked === matching to work.
    }

    return (
        <>
            <h2>Challenge Game!</h2>
            {!choices ? <></> : choices.map((item, i) => {return <button onClick={handleChoice} key={i} value={item}>{item}</button>})}
            {!choices ? <></> : <p>{choices[Math.floor(Math.random() * 4)]}</p>}
        </>
        
    )
}

export default Challenge
