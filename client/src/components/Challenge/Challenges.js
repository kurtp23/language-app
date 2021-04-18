// TODO: Send to STATS via sats API
import React, { useEffect } from 'react';

// Components
import Challenge from './Challenge.js'
import FlashCardCategoryTemplate from '../flash-card-template/FlashCardCategoryTemplate.js'

// API calls
import API from '../../utils/API.js'
import { Card, Header, Container, Icon, Divider } from 'semantic-ui-react';

function Challenges({ userState }) {
    console.log("User State from Challenges", userState)
    const [categoryList, setCategoryList] = React.useState([])
    const [selection, setSelection] = React.useState('')

    useEffect(() => {
        // get data from MongoDB
        API.getChallenges()
        .then((data) => {
            let list = []        
            data.data[0].names.map(name => 
                list.push({
                    cat: name.cat,
                    description: name.description,
                })
            )
    
            setCategoryList(list)
        })

    }, [])
    
    const RenderCategories = categoryList.map((cat, i) => {
        return <FlashCardCategoryTemplate key={i} category={cat.cat} description={cat.description} onChange={handleSelection}/>
    })
    
    function handleSelection(sel){
        setSelection(sel)
    }

    return (
        <>
            <Container centered padded className="ui raised centered text container segment" >
                
                {!selection ? 
                    <>
                        <Container textAlign='center'><Header className="ui orange header" as='h2'><Icon name='book' />Choose a Category</Header></Container>
                        <Divider />
                    </>
                : <></>}

               
                    {!selection ?  <Card.Group centered itemsPerRow={2}>{RenderCategories}</Card.Group> : <></>}
                    
                

                    {selection ? <Challenge language={userState.language} category={selection}/> : <></>}
                

            </Container>
        </>
    )
}

export default Challenges;
