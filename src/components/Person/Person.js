import React from 'react';
import classes from './Person.module.css';
import Radium from "radium";

const person = props => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return <div className={classes.Person} style={style}>
        <p>My name is {props.name} and I am {props.age} years old</p>
        <button onClick={props.delete}>Delete</button>
        <input type="text" onChange={props.change} value={props.name} />
    </div>
}

export default Radium(person)
