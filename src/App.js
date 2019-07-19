import React, { Component } from 'react';
import './App.css';
import PeopleList from './Person/PeopleList'
import Letters from './Letters/Letters'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ErrorBoundary>
                    <PeopleList />
                </ErrorBoundary>
                <hr/>
                <Letters/>
            </div>
        );
    }
}

export default App;
