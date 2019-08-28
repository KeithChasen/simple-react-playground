import React, { memo } from 'react';
import Radium from 'radium'

const Toggler = (props) => {
    const style = {
        backgroundColor: props.show ? 'red' : 'green',
        color: 'white',
        ':hover': {
            backgroundColor: props.show ? 'pink' : 'lightgreen',
            color: 'black'
        }
    }

    let classes = []

    if (props.peopleLength <= 2) {
        classes.push('red')
    }

    if (props.peopleLength <= 1) {
        classes.push('bold')
    }

    return (
        <div>
            <h1>People</h1>
            <p className={classes.join(' ')}>Everyone is important!</p>
            <button style={style} onClick={props.toggle}>{ props.show ? 'Hide' : 'Show' }</button>
        </div>
    )

}

//memo using the last render result if nothing changed
export default memo(Radium(Toggler))