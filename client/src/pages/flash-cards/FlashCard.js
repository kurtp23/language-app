import React from 'react';
import FlashCardTemplate from '../../components/flash-card-template/FlashCardTemplate';

const FlashCard = () => {
    return (
        <div>
        <div className="ui raised very padded text container segment">
            <h2 className="ui orange header"> This is the flash card page</h2>
        </div>  
            <FlashCardTemplate />
        </div>

    )
}

export default FlashCard;