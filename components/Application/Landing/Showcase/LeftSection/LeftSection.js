// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// component imports
import BigHeading from './BigHeading';
import NewsLetter from './NewsLetter';

// main showcase left section
const LeftSection = () => {
    return (
        <Fragment>
            <div className="sense-main--showcase-left">
                {/* Big heading */}
                <BigHeading/>

                {/* News letter */}
                <NewsLetter/>
            </div>
        </Fragment>
    )
}

// props validation
LeftSection.propTypes = {}

export default LeftSection
