import React, { useEffect, useState } from 'react';
import FlashCardTemplate from '../../components/flash-card-template/FlashCardTemplate';
import { Grid, Pagination } from 'semantic-ui-react';
import API from '../../utils/API';

const FlashCard = () => {

    const [flashCardList, setFlashCardList] = useState([])
    const [activeFlashCard, setActiveFlashCard] = useState(1)

    const handlePaginationChange = (e, { activePage }) => setActiveFlashCard(activePage)

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
            setFlashCardList(fcList);
            })
    }, [])

    return (
        <div>
            <h1>This is the flash card page</h1>

            <FlashCardTemplate cardNumber={activeFlashCard} word={flashCardList[activeFlashCard -1] ? flashCardList[activeFlashCard -1].word : 'loading...'} englishWord={flashCardList[activeFlashCard -1] ? flashCardList[activeFlashCard -1].englishWord : 'loading'}/>
        
            <Grid columns={1} verticalAlign='middle'>
                <Grid.Column>
                <Pagination
                    activePage={activeFlashCard}
                    onPageChange={handlePaginationChange}
                    totalPages={flashCardList.length}
                />
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default FlashCard;