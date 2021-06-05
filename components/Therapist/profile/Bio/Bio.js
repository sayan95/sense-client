// dependency imports
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {appendCommas} from '../../../../lib/formatter';

// therapist bio component
const Bio = () => {
    // state from store
    const user = useSelector(state => state.therapistAuth.user);
    
    // local state
    const customisedUserDetails = {
        education : user.profile.education ,
        experties : user.profile.experties,
    } 

    // jsx content
    return (
        <Fragment>
            {/* bio container */}
            <div className='therapist-bio-container'>
                <div className='therapist-bio-container-body'>
                    {/* perrsonal details */}
                    <div className='personal-details'>
                        {/* header */}
                        <div className='personal-details-header'>
                            <h4>Personal details</h4>
                        </div>
                        <div className='details-grid'>all personal details here</div>
                    </div>

                    {/* professional details */}
                    <div className='professional-details'>
                        {/* header */}
                        <div className='professional-details-header'>
                            <h4>professional details</h4>
                        </div>
                        <div className='details-grid'>
                            {Object.keys(customisedUserDetails).map(k=> {
                                return (
                                    <div className='details-grid-row'>
                                        <div className='details-grid-column'>{k}</div>
                                        <div className='details-grid-column'>:</div>
                                        <div className='details-grid-column'>{appendCommas(customisedUserDetails[k])}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Bio

{/* <div className='details-grid-row'>
                                <div className='details-grid-column'>col-1</div>
                                <div className='details-grid-column'>col-2</div>
                            </div>
                            <div className='details-grid-row'>
                                <div className='details-grid-column'>col-3</div>
                                <div className='details-grid-column'>col-4</div>
                            </div> */}