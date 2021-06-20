// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Navbar collapse control
const NavCollapseControl = ({event}) => {
    return (
        <Fragment>
            <span onClick={event} className="collapse-btn">
                <i className="las la-bars"></i>
            </span>
        </Fragment>
    )
}

// props validation
NavCollapseControl.propTypes = {
    event: PropTypes.func.isRequired
}

export default NavCollapseControl
