import React, { useEffect, useState } from 'react';
import FlashCardTemplate from '../../components/flash-card-template/FlashCardTemplate';
import { Grid, Pagination, Divider } from 'semantic-ui-react';
import API from '../../utils/API';

const FlashCard = ({category}) => {

    const [flashCardList, setFlashCardList] = useState([])
    const [activeFlashCard, setActiveFlashCard] = useState(1)
    const [flashCardsViewed, updateFlashCardsViewed] = useState(1)

    const handlePaginationChange = (e, { activePage }) => setActiveFlashCard(activePage)

    useEffect(() => {
        API.getChallengeData(category)
        .then((data) => {
            // console.log('data is', data.data[0].data.farmAnimals);
             let fcList = []
             console.log(data)
             data.data.forEach((item) => {
                 fcList.push({                  
                     word: item.spa, 
                     englishWord: item.eng
                 }) 
             })
             setFlashCardList(fcList);
             })
    }, [])
    
    useEffect(() => {
        updateFlashCardsViewed(flashCardsViewed + 1)
        console.log('flashcards viewed is', flashCardsViewed);
    }, [activeFlashCard])

    return (
        <div style={{ width: '100%' }} className="ui raised text container segment">
            <h2 className="ui orange header">Flash Cards: {category} </h2>
            <div>
                <Grid columns={1} verticalAlign='bottom'>
                    <Grid.Row>
                        <Grid.Column>
                            <div style={{ height: '50vh', margins: '5px' }}>
                                <FlashCardTemplate category={category} cardNumber={activeFlashCard} word={flashCardList[activeFlashCard -1] ? flashCardList[activeFlashCard -1].word : 'loading...'} englishWord={flashCardList[activeFlashCard -1] ? flashCardList[activeFlashCard -1].englishWord : 'loading'}/>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider horizontal style={{ content: 'center' }}>Language Learner</Divider>
                    <Grid.Row>
                        <Grid.Column>
                        <Pagination
                            activePage={activeFlashCard}
                            onPageChange={handlePaginationChange}
                            totalPages={flashCardList.length}
                            siblingRange={1}
                            boundaryRange={0}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                        />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
}

export default FlashCard;