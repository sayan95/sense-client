import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Card footer component
const CardFooter = ({children}) => {
    return (
        <Fragment>
            <div className='card-footer'>
                {children}
            </div>
        </Fragment>
    )
}

// props validation
CardFooter.propTypes = {

}

export default CardFooter
