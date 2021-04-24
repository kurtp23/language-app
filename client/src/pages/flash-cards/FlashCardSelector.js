import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import FlashCard from './FlashCard';
import CategorySelector from '../categorySelector/CategorySelector';

import API from '../../utils/API.js';

const FlashCardSelector = ({userState}) => {
  const [categoryList, setCategoryList] = useState([]);
  const [selection, setSelection] = useState('');

  useEffect(() => {
    API.getChallenges().then((data) => {
      console.log('this is challenge data', data);
      let list = data.data[0].names.map((name) => {
        return ({
          cat: name.cat,
          description: name.description,
        });
      });
      setCategoryList(list);
    });
  }, []);

  function handleSelection(sel) {
    setSelection(sel);
  }

  const RenderCategories = categoryList.map((cat, i) => {
    return (
      <CategorySelector
        key={i}
        category={cat.cat}
        description={cat.description}
        onChange={handleSelection}
      />
    );
  });

  return (
    <>
      <div className='ui raised text container segment'>
        {!selection ? <h2 className='ui orange header'>Select a Category!</h2> : <></>}

        {!selection ? (
          <Card.Group itemsPerRow={2}>
            {' '}
            {RenderCategories}{' '}
          </Card.Group>
        ) : (
          <FlashCard userState={userState} category={selection} />
        )}
      </div>
    </>
  );
};

export default FlashCardSelector;
