// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Sense team member details card
const LandingTeamCard = ({imageLink}) => {
    return (
        <Fragment>
            <div className='landing-team-card' style={{ height:'560px' }}>
                <div className='landing-team-card-header'>
                    <img src={imageLink} alt='sense-team-member-1'/>
                </div>
                <div className='landing-team-card-body'>
                    {/* memeber title */}
                    <div className='member-title'>
                        <h5 className='main-heading'>Member Name</h5>
                        <small className='sub-heading'>Member role</small>
                    </div>
                    
                    {/* Member short description */}
                    <div className='brief-description'>
                        You can relay on our amazing features list and also our 
                        customer services will be great experience.
                    </div>

                    {/* member social links */}
                    <div className='social-links'>
                        <i className='lab la-facebook-square'></i>
                        <i className='lab la-instagram'></i>
                        <i className='lab la-whatsapp'></i>
                        <i className='lab la-linkedin'></i>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

// props validation
LandingTeamCard.propTypes = {
    imageLink: PropTypes.string
}

export default LandingTeamCard
