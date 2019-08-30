import React, { useRef, useEffect } from 'react';
import './Toggler.css';

const Toggler = props => {
    const toggleBtnRef = useRef(null)

    useEffect(() => {
        console.log('Toggler useEffect')

        toggleBtnRef.current.click()

        return () => {
            console.log('Toggler cleanup work in useEffect')
        }
    },[])


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
            <button
                ref={toggleBtnRef}
                style={style}
                onClick={props.toggle}
            >
                { props.show ? 'Hide' : 'Show' }
            </button>
        </div>
    )

}

export default Toggler
