import React from 'react'

const personClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}

export default personClass