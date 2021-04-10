// this is a multiple choice app, user gets 4 images and user selects the image that matches the word
// user picks a "category": Farm Animals, Zoo, Fruits, Vegetables, Geography (mountains, rivers, etc)
// user sees 4 images and a word
    // can the word have an audio?
// pick ANY and all words are shown
// pick CORRECT and the user is rewarded with a happy animation
// adds to score for user to DB, sends up the score
// goe to next
// do this 5 times
// exit at will

// data
// random words from category API
// small images from API: https://pixabay.com/api/?key=19527879-11b24e10aa7a260d8c2bad18b&q=${term-here}&image_type=photo
    // this returns an array of images. Look at "tags" to get an exact match, otherwise you get weird other things. Tags = "Farm Animal"
// MAKE SURE THESE ARE KID FRIENDLY
// Mongoose??? What are we storing here? Set wordlist <- prevents any uncertainty with what is displayed
// Stats => Users Schema

// functionality
    // get 4 words from API
    // get associated pictures from API
    // randomly pick ONE word to be the the user word
    // RENDER 4 images and 1 word
    // onclick: if word=image ? Success : No Points
    // gotonext

import React, { useEffect } from 'react';

import categories from './ChallengesDB.js'
import Category from './Category.js'
// semantic ui
import { Grid, Segment } from 'semantic-ui-react'


function Challenges() {

    const [categoryList, setCategoryList] = React.useState([])
    const [selection, setSelection] = React.useState('')

    useEffect(() => {

        let list = []        
        categories.names.map(name => {
            list.push(name.cat)
        })

        setCategoryList(list)
    }, [])
    
    const RenderCategories = categoryList.map((cat, i) => {
        return <Category key={i} category={cat} onChange={handleSelection}/>
    })
    
    function handleSelection(sel){
        setSelection(sel)
    }
    console.log("This is the selection:", selection)
    
    return (
        <>
            <h2>Select a Category!</h2>

                    {!selection ? RenderCategories : <></>}

        </>
        
    )
}

export default Challenges;