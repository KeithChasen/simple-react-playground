import React, { Component } from 'react';
import './Person.module.css';
import Person from "./Person";
import Radium, { StyleRoot } from 'radium'

class PeopleList extends Component {
    state = {
        people: [
            {id:1, name: 'Kostya', age: 30},
            {id:2, name: 'John', age: 52},
            {id:3, name: 'Paul', age: 71},
        ],
        show: false
    }

    changeName = (event, id) => {
        let personIndex = this.state.people.findIndex(p => {
            return p.id === id
        })

        let person = {
            ...this.state.people[personIndex]
        }

        person.name = event.target.value

        let people = [...this.state.people]
        people[personIndex] = person

        this.setState({
            people
        })
    }

    toogleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    deletePersonHandler = (index) => {
        let people = [...this.state.people]
        people.splice(index, 1)
        this.setState({people})
    }

    render() {

        const style = {
            backgroundColor: this.state.show ? 'red' : 'green',
            color: 'white',
            ':hover': {
                backgroundColor: this.state.show ? 'pink' : 'lightgreen',
                color: 'black'
            }
        }

        const renderPeople = this.state.show ?
            this.state.people.map(
                (person, index) => <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    delete={() => this.deletePersonHandler(index)}
                    change={(event) => this.changeName(event, person.id)}
                />
            )
            : null

        let classes = []

        if (this.state.people.length <= 2) {
            classes.push('red')
        }

        if (this.state.people.length <= 1) {
            classes.push('bold')
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>People</h1>
                    <p className={classes.join(' ')}>Everyone is important!</p>
                    <button style={style} onClick={this.toogleShow}>{ this.state.show ? 'Hide' : 'Show' }</button>
                    <div>
                        { renderPeople }
                    </div>
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(PeopleList)