import React from 'react';

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

    if (props.people.length <= 2) {
        classes.push('red')
    }

    if (props.people.length <= 1) {
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

export default Toggler