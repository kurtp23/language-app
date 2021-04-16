import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import FlashCard from './FlashCard';
import FlashCardCategoryTemplate from '../../components/flash-card-template/FlashCardCategoryTemplate';

import API from '../../utils/API.js';

const FlashCardSelector = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [selection, setSelection] = useState('');

    useEffect(() => {
        API.getChallenges()
        .then((data) => {
            let list = []
            data.data[0].names.map(name => {
                list.push({
                    cat:name.cat,
                    description: name.description,
                })
            })
            setCategoryList(list);
        })
    }, [])


    const RenderCategories = categoryList.map((cat, i) => {
        return (
                <FlashCardCategoryTemplate key={i} category={cat.cat} description={cat.description} onChange={handleSelection} />
        )
    })

    function handleSelection(sel) {
        setSelection(sel)
    } 

    return (
        <>
        <div className="ui raised very padded text container segment">
            
            {!selection ? <h2 className="ui orange header">Select a Category!</h2> : <></>}

            {!selection ? <Card.Group fluid itemsPerRow={1}> {RenderCategories} </Card.Group>: <FlashCard category={selection}/>}
        </div>
        </>
        
    )
}

export default FlashCardSelector;