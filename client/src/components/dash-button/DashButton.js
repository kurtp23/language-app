import React from 'react';
import './DashButton.css';

const DashButton = (props) => {

    const color = props.color

    return (
        <div className='dash-btn'>
            {props.children}
        </div>
    )
}

export default DashButton;