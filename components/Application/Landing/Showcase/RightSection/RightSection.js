// depe.
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Main showcase right section
const RightSection = () => {
    return (
        <Fragment>
            <div className="sense-main--showcase-right">
                <div className="image-container">
                    <img src="/assets/svgs/happy-place.svg" alt="" />
                </div>
            </div>
        </Fragment>
    )
}

// props validation
RightSection.propTypes = {}

export default RightSection
