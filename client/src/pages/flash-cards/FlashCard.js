import React, { useEffect, useState } from 'react';
import FlashCardTemplate from '../../components/flash-card-template/FlashCardTemplate';
import { Grid, Pagination, Divider, Button } from 'semantic-ui-react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';

const FlashCard = ({category, userState}) => {

    const [flashCardList, setFlashCardList] = useState([])
    const [activeFlashCard, setActiveFlashCard] = useState(1)
    const [flashCardsViewed, updateFlashCardsViewed] = useState(1)

    const handlePaginationChange = (e, { activePage }) => setActiveFlashCard(activePage)

    const handleExit = () => {
        // send data to stats schema here
        const stat = {
            flashcardVal: flashCardsViewed,
            challengeVal: 0,
            date: new Date()
        }
        
        console.log("This will go to stats schema: ", stat)
        API.putStat(userState.userId, stat)

    }

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
                    <Grid.Row >
                        <Grid.Column style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} onClick={()=> console.log('I have been clicked!')}>
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
                        <Grid.Column style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} onClick={handleExit}>
                            <Link to="">
                                <Button style={{ margin: '5px', backgroundColor: '#f47835', color: 'white' }} onClick={()=> console.log('I have been clicked!')}>
                                    Exit
                                </Button>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
}

export default FlashCard;