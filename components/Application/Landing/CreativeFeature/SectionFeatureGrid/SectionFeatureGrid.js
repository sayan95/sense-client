// dependency imports
import React, { Fragment } from 'react';

// section feature grid
const SectionFeatureGrid = ({children}) => {
    return (
        <Fragment>
            <div className='creative-feature1-row'>
                {children}
            </div>
        </Fragment>
    )
}

export default SectionFeatureGrid
