import React, { Component } from 'react';
import './Person.module.css';
import Person from "./Person";
import Toggler from '../Toggler/Toggler'
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

    toggleShow = () => {
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

        return (
            <StyleRoot>
                <div>
                    <Toggler
                        peopleLength={this.state.people.length}
                        show={this.state.show}
                        toggle={this.toggleShow}
                    />
                    { renderPeople }
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(PeopleList)