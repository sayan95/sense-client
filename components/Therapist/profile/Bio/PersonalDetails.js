// dependency imports
import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import {appendCommas, splitStringByChar} from '../../../../lib/formatter';

// therapist professional details component for bio section
const PersonalDetails = ({personalDetails}) => {
  return (
    <Fragment>
        <div className="personal-details">
            {/* header */}
            <div className="personal-details-header">
                <h4>Personal details</h4>
            </div>
            <div className="details-grid">
                {Object.keys(personalDetails).map((k) => {
                    return (
                    <div className="details-grid-row">
                        <div className="details-grid-column">
                            {splitStringByChar(k, "_")}
                        </div>
                        <div className="details-grid-column">:</div>
                        <div className="details-grid-column">
                            {appendCommas(personalDetails[k])}
                        </div>
                    </div>
                );
                })}
            </div>
      </div>
    </Fragment>
  );
};

// props validation
PersonalDetails.propTypes = {
    personalDetails: PropTypes.object.isRequired
}

export default PersonalDetails;
