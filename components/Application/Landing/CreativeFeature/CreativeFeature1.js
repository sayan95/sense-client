// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from './SectionHeader/SectionHeader';
import SectionFeatureGrid from './SectionFeatureGrid/SectionFeatureGrid';
import Column1 from './SectionFeatureGrid/Column1/Column1';
import Column2 from './SectionFeatureGrid/Column2/Column2';

// Creative feature: 1 component for main landing page
const CreativeFeature1 = ({id}) => {
    return (
        <Fragment>
            <div id={id} className='sense-main--creative-feature-1'>
                {/* Section header */}
                <SectionHeader/>

                {/* section feature grid */}
                <SectionFeatureGrid>
                    {/* col 1 */}
                    <Column1/>

                    {/* col 2 */}
                    <Column2/>
                </SectionFeatureGrid>
            </div>
        </Fragment>
    )
}

// props validation
CreativeFeature1.propTypes = {
    id: PropTypes.string.isRequired
}

export default CreativeFeature1
