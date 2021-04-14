import React, { useState, useEffect } from 'react';

import FlashCard from './FlashCard';
import Category from '../../components/Challenge/Category';

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
        return <Category key={i} category={cat.cat} description={cat.description} onChange={handleSelection} />
    })

    function handleSelection(sel) {
        setSelection(sel)
    } 

    return (
        <>
        <div className="ui raised very padded text container segment">
            
            {!selection ? <h2 className="ui orange header">Select a Category!</h2> : <></>}

            {!selection ? RenderCategories : <FlashCard category={selection}/>}
        </div>
        </>
        
    )
}

export default FlashCardSelector;