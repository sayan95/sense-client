// dependency imports
import React, { Fragment } from 'react';

// column 1 : creatve feature1 grid
const Column1 = () => {
    return (
        <Fragment>
            <div className='creative-feature1-column col-1'>
                {/* column 1 image container */}
                <div className='image-container'>
                    <img src='/assets/svgs/AI.svg' alt='sense-AI-enabled'/>
                </div>
            </div>
        </Fragment>
    )
}

export default Column1
