// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Landing news card header
const LandingNewsCardHeader = ({imageLink}) => {
    return (
        <Fragment>
            <div className='sense-news-card--header'>
               <img src={imageLink} alt='' height='' width=''/>
            </div>
        </Fragment>
    )
}


// props validation
LandingNewsCardHeader.propTypes = {
    imageLink: PropTypes.string
}

export default LandingNewsCardHeader
