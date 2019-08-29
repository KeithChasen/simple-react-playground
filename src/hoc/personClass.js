import React from 'react'

const personClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default personClass