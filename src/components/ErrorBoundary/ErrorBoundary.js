import React, { Component } from 'react'

/**
 * Doesn't work in a development mode
 */
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary