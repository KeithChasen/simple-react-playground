import React, { Component } from 'react';
import classes from './App.module.css';
import PeopleList from './components/Person/PeopleList'
import Letters from './components/Letters/Letters'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import WithClass from './hoc/WithClass'

class App extends Component {
    render() {
        return (
            <WithClass classes={classes.App}>
                <ErrorBoundary>
                    <PeopleList />
                </ErrorBoundary>
                <hr/>
                <Letters/>
            </WithClass>
        );
    }
}

export default App;
