// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Sense landing page button
const LandingButton = ({children, className, type, event}) => {
    return (
        <Fragment>
            <div className='landing-button-container' onClick={event}>
                <button type={type} className={className}>
                    {children}
                </button>
            </div>
        </Fragment>
    )
}

// default props
LandingButton.defaultProps = {
    type: 'button'
}

// props validation 
LandingButton.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string.isRequired,
    event: PropTypes.func
}

export default LandingButton
