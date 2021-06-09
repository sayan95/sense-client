// dependency imports
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import PersonalDetails from './PersonalDetails';
import ProfessionalDetails from './ProfessionalDetails';

// therapist bio component
const Bio = () => {
    // state from store
    const user = useSelector(state => state.therapistAuth.user);
    
    // local state
    const customisedUserDetails = {
        personal:{
            first_name: user.profile.firstname,
            last_name: user.profile.lastname, 
            username: user.username,
            email: user.email,
            gender: user.profile.gender,
            phone: user.profile.phone
        },
        professional: {
            language_proficiency: user.profile.language_proficiency,
            education : user.profile.education ,
            experties : user.profile.experties,
            preferred_age_groups: user.profile.age_group,
            therapy_profile: user.profile.therapist_profile,
            spectrum_specializations: user.profile.spectrum_specialization
        }
    } 

    // jsx content
    return (
        <Fragment>
            {/* bio container */}
            <div className='therapist-bio-container'>
                <div className='therapist-bio-container-body'>
                    {/* perrsonal details */}
                    <PersonalDetails personalDetails={customisedUserDetails.personal}/>
                    {/* professional details */}
                    <ProfessionalDetails professionalDetails={customisedUserDetails.professional}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Bio;
