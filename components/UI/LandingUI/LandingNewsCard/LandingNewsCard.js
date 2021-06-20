// dependency imports
import React, { Fragment } from 'react';


// News card for sense landing
const LandingNewsCard = ({children}) => {
    return (
        <Fragment>
            <div className='sense-news-card'>
                {children}
            </div>
        </Fragment>
    )
}

export default LandingNewsCard
