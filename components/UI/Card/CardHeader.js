import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Card header component 
const CardHeader = ({children}) => {
    return (
        <Fragment>
            <div className='card-header'>
                {children}
            </div>
        </Fragment>
    )
}

// props validation
CardHeader.propTypes = {

}

export default CardHeader
