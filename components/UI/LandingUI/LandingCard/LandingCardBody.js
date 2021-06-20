// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Sense landing card body
const LandingCardBody = ({children}) => {
    return (
        <Fragment>
            <div className='landing-card-body'>
                {children}
            </div>
        </Fragment>
    )
}

// props validation
LandingCardBody.propTypes = {

}

export default LandingCardBody
