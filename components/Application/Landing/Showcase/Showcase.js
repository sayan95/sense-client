// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// component imports
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';

// Landing page main showcase component
const Showcase = () => {
    return (
        <Fragment>
            {/* main showcase section */}
            <div className="sense-main--showcase">
                {/* Left sub section */}
               <LeftSection/>

                {/* Right sub section */}
                <RightSection/>
            </div>
        </Fragment>
    )
}


// props validation
Showcase.propTypes = {}

export default Showcase;
