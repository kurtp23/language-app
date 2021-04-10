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
    useEffect(() => {
        // get data from MongoDB
        API.getChallengeData(category)
        .then((data) => {
            console.log("got category data", data.data)
            
            setData(data.data)
        })

    }, [])
    
    return <h2>You picked {category}! Now we will do our fun activity!</h2>
}

export default Challenge
