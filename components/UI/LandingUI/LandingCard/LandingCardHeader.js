// dependency imports
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Sense landing card header 
const LandingCardHeader = ({children}) => {
    return (
        <Fragment>
            <div className='landing-card-header'>
                {children}
            </div>
        </Fragment>
    )
}

// props validation
LandingCardHeader.propTypes = {

}

export default LandingCardHeader;
