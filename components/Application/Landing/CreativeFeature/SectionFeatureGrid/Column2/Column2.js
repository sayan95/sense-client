// dependency imports
import React, { Fragment } from 'react';

// component imports
import LandingButton from '../../../../../../components/UI/LandingUI/LandingButton/LandingButton';

// column 2: Creative feature grid
const Column2 = () => {
    return (
        <Fragment>
            <div className='creative-feature1-column col-2'>
                {/* creative feature description  */}
                <div className='creative-feature-1-description'>
                    {/* description header */}
                    <div className='description-header'>
                        {/* sub heading */}
                        <h5 className='sub-heading'>
                            <span className='sub-heading-1'><i className="las la-braille"></i></span>
                            <span className='sub-heading-2'> CREATIVE FEATURES </span>
                        </h5>
                        {/* main heading */}
                        <h3 className='main-heading'>
                            <span>Build <b>community</b> & <b>conversion</b></span> 
                            <span>with our suite of AI tool</span>
                        </h3>
                    </div>
                    
                    {/* description body */}
                    <div className='description-body'>
                        <p className='main-text'>
                            Temporibus autem quibusdam et aut officiis debitis aut rerum a 
                            necessitatibus saepe eveniet ut et voluptates repudiandae sint 
                            molestiae non recusandae itaque.
                        </p>
                        <p className='sub-text'>
                            <i className='las la-home'></i>
                            <span>Donec pede justo fringilla vel nec.</span>
                        </p>
                        <p className='sub-text'>
                            <i className='las la-globe'></i>
                            <span>Cras ultricies mi eu turpis hendrerit fringilla.</span>
                        </p>
                    </div>

                    {/* button group */}
                    <div className='creative-feature-1--btn-group'>
                        <LandingButton className='landing-button'>Learn More</LandingButton>
                    </div>
                </div>
            </div>  
        </Fragment>
    )
}

export default Column2
