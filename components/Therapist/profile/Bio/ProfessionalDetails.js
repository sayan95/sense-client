// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {appendCommas, splitStringByChar} from '../../../../lib/formatter';

// therapist professional details component for bio section
const ProfessionalDetails = ({professionalDetails}) => {
    return (
        <Fragment>
            <div className='professional-details'>
                {/* header */}
                <div className='professional-details-header'>
                    <h4>professional details</h4>
                </div>
                <div className='details-grid'>
                    {Object.keys(professionalDetails).map(k=> {
                        return (
                            <div className='details-grid-row'>
                                <div className='details-grid-column'>{splitStringByChar(k, '_')}</div>
                                <div className='details-grid-column'>:</div>
                                <div className='details-grid-column'>{appendCommas(professionalDetails[k])}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
}

//props validatiom
ProfessionalDetails.propTypes = {
    professionalDetails: PropTypes.object.isRequired
}

export default ProfessionalDetails;
