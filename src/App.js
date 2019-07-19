import React, { Component } from 'react';
import './App.css';
import PeopleList from './components/Person/PeopleList'
import Letters from './components/Letters/Letters'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

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
