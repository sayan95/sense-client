// dependency imports
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {splitStringByChar} from '../../../../lib/formatter';

// therapist dashboard work area
const MainContent = ({children}) => {
    // dependency
    const router = useRouter();
    const {subject} = router.query;

    // states from store
    const user = useSelector(state => state.therapistAuth.user);
    const pageMode = useSelector(state => state.app.pageMode);

    // collapseble control
    const collapsibleHandler = () => {
        const collapse = document.getElementById('collapse');
        collapse.classList.toggle('is-collapsed');
    }
    // jsx content
    return (
        <Fragment>
            <div className='therapist-work-area'>
                {/* Dynamic content area */}
                <div className='section-1'>
                    <div className='page-heading'>
                        <h2>{subject ? splitStringByChar(subject, '-') : pageMode}</h2>
                    </div>
                    <div className='page-content animate__animated animate__zoomIn animate__faster'>
                        {children}
                    </div>
                </div>

                {/* static content area */}
                <div className='section-2'>
                    <div className='collapse-control-area'>
                        <h3>Others</h3>
                        <span><i onClick={collapsibleHandler} className='las la-angle-down collpase-control-icon'></i></span>
                    </div>
                    
                    {/* collapisble area */}
                    <div id='collapse' className='collapsible is-collapsed'>
                        {/* section content */}
                        <div className='content-area'>
                            {/* Account brief */}
                            <div className='account-brief-area'>
                                <h3>Account Brief</h3>
                                <hr/>
                                <div className='details'>
                                    <table>
                                        <tr>
                                            <td>Joined on: </td>
                                            <td>{user && user.dates.created_at}</td>
                                        </tr>
                                        <tr>
                                            <td>Last login: </td>
                                            <td>{user && user.dates.logged_in_at}</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td>Active</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            {/* Important links */}
                            <div className='important-link-area'>
                                <h3>Quick links</h3>
                                <hr/>
                                <div className='details'>
                                    <table>
                                        <tr>
                                            <td>Knowledge gate: </td>
                                            <td>click here</td>
                                        </tr>
                                        <tr>
                                            <td>Change password: </td>
                                            <td>click here</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* section footer image */}
                        <div className='image-container'>
                            <img src='/assets/svgs/profile_data.svg' alt='sense-therapist-account'/>
                        </div>
                        </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MainContent;
