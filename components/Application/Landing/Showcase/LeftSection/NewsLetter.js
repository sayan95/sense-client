// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// component imports
import LandingButton from '../../../../UI/LandingUI/LandingButton/LandingButton';

// news letter component in left section
const NewsLetter = () => {
    return (
        <Fragment>
            <div className="news-letter">
                <h6 className="news-letter-heading">
                    Subscribe to be the first to know about our launch
                </h6>
                <div className="news-letter-input-box">
                    <input type="text" name="email" placeholder="Email" />
                    <LandingButton className="landing-button">Subscribe</LandingButton>
                </div>
            </div>
        </Fragment>
    )
}

// props validation
NewsLetter.propTypes = {}

export default NewsLetter
