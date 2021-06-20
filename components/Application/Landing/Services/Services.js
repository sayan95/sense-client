// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// component imports
import LandingButton from '@components/UI/LandingUI/LandingButton/LandingButton';
import LandingCard from '@components/UI/LandingUI/LandingCard/LandingCard';
import LandingCardHeader from '@components/UI/LandingUI/LandingCard/LandingCardHeader';
import LandingCardBody from '@components/UI/LandingUI/LandingCard/LandingCardBody';


// Sense landing page services section
const Services = ({id}) => {
    // local states
    const featureElements = [
        {heading: "Easy To Use", bodyText: "Sed ut perspiciatis unde omnis iste natus error sitvoluptatem.", icon: "la-snowboarding"},
        {heading: "Analytic Security", bodyText: "Sed ut perspiciatis unde omnis iste natus error sitvoluptatem.", icon: "la-shield-alt"},
        {heading: "Grow Mental Health", bodyText: "Sed ut perspiciatis unde omnis iste natus error sitvoluptatem.", icon: "la-seedling"},
        {heading: "Data Security", bodyText: "Sed ut perspiciatis unde omnis iste natus error sitvoluptatem.", icon: "la-user-shield"}
    ];
    
    // jsx content
    return (
        <Fragment>
            <div id={id} className="sense-main--service">
                <div className="service-row">
                    {/* Left column */}
                    <div className="service-row-col1">
                        {/* Landing card UI element */}
                        <LandingCard>
                            <LandingCardHeader>
                                <i className="las la-cube header-icon"></i>
                                <h1 className="header-big-text">Why Choose Us ?</h1>
                            </LandingCardHeader>
                            <LandingCardBody>
                                <p className="body-text">
                                    Nam libero tempore cum soluta as nobis est eligendi optio
                                    cumque nihile impedite quo minus id quod maxime.
                                </p>
                                <LandingButton className="landing-button-outlined">
                                    Learn More
                                </LandingButton>
                            </LandingCardBody>
                        </LandingCard>
                    </div>

                    {/* Right column */}
                    <div className="service-row-col2">
                        <div className="feature-item-grid">
                            {
                               featureElements.map((element, index) => {
                                    return (
                                        // Service card items
                                        <div key={index} className={`feature-item feature-item-${index+1}`}>
                                            <LandingCard className="landing-card centered hoverable">
                                                <LandingCardHeader>
                                                    <i className={`las ${element.icon} header-icon rounded`}></i>
                                                    <h3 className="header-small-text">{element.heading}</h3>
                                                </LandingCardHeader>
                                                <LandingCardBody>
                                                    <p className="body-text">{element.bodyText}</p>
                                                </LandingCardBody>
                                            </LandingCard>
                                        </div>
                                    )
                               }) 
                            }
                        </div>
                    </div>
                </div>
            </div>
      
        </Fragment>
    )
}

// props validation
Services.propTypes = {
    id: PropTypes.string.isRequired
}

export default Services
