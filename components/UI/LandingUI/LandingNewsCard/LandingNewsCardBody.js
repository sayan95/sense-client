// dependency imports
import React, { Fragment } from 'react';

// Landing news card body
const LandingNewsCardBody = ({children}) => {
    return (
        <Fragment>
            <div className='sense-news-card--body'>
                {children}
            </div>
        </Fragment>
    )
}

export default LandingNewsCardBody;
