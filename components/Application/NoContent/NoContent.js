// dependency imports
import React, { Fragment } from 'react';
import Image from 'next/image';

// No content message component
const NoContent = () => {
    return (
        <Fragment>
            <div className='no-content'>
                {/* No content headings */}
                <div className='no-content-header'>
                    <h1>Oops ! Content Not Available</h1>
                    <p>Content yet to come</p>
                </div>

                {/* No content image  */}
                <div className='no-content-image-container'>
                    <img src='/assets/images/no-content.png' alt='sense-no-content-available'/>
                </div>
            </div>
        </Fragment>
    )
}

export default NoContent;
