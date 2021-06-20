// dependency imports
import React, { Fragment } from 'react';

// Landing news card footer
const LandingNewsCardFooter = ({children}) => {
    return (
        <Fragment>
            <div className='sense-news-card--footer'>
                {children}
            </div>
        </Fragment>
    )
}

export default LandingNewsCardFooter
