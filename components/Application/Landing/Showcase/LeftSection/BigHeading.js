// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Big heading in left section
const BigHeading = () => {
    return (
        <Fragment>
            <div className="heading-container">
                <h3 className="sub-heading">sense</h3>
                <h1 className="big-heading">
                    <span>Bringing Mental</span>
                    <span>Health To All</span>
                </h1>
                <p className="small-line">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
            </div>
        </Fragment>
    )
}

// props validation
BigHeading.propTypes = {}

export default BigHeading
