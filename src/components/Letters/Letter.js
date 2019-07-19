import React from 'react';
import './Letter.css';

const Letter = props => {
    return (
        <div className='Letter' onClick={props.delete}>
            {props.letter}
        </div>
    )
}

export default Letter