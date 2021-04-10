import React, { useEffect, useState } from 'react';
import FlashCardTemplate from '../../components/flash-card-template/FlashCardTemplate';
import API from '../../utils/API';

const FlashCard = () => {

    const [flashCardList, setFlashCardList] = useState([])

    useEffect(() => {
        API.getFlashcards()
        .then((data) => {
            let fcList = []
            data.data.map(item => {
                fcList.push({                  
                    word: item.word, 
                    englishWord: item.englishWord
                }) 
            })
            console.log('fclist is', fcList)
            setFlashCardList(fcList);

            })

    }, [])
    console.log('flashcardlist is', flashCardList);
    return (
        <div>
            <h1>This is the flash card page</h1>
            <FlashCardTemplate />
        </div>

    )
}

export default FlashCard;