import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Card body component
const CardBody = ({children}) => {
    return (
        <Fragment>
            <div className='card-body'>
                {children}
            </div>
        </Fragment>
    )
}

// props validation
CardBody.propTypes = {

}

export default CardBody
