// dependency imports
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


// Sense landing page card element 
const LandingCard = ({children, className}) => {
    return (
        <Fragment>
            <div className={className}>
                {children}
            </div>
        </Fragment>
    )
}

// default props
LandingCard.defaultProps = {
    className: "landing-card"
}

// props validation
LandingCard.propTypes = {
    className: PropTypes.string.isRequired
}

export default LandingCard
