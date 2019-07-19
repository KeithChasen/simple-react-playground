import React, { Component } from 'react';
import './App.css';
import PeopleList from './Person/PeopleList'

import Letters from './Letters/Letters'

class App extends Component {
    render() {
        return (
            <div className="App">
                <PeopleList />

                <hr/>

                <Letters/>

            </div>
        );
    }
}

export default App;
