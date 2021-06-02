import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// Dashboard component
const Dashboard = props => {
    return (
        <Fragment>
            <section className='dashboard-main-container'>
                {/* header */}
                <Header/>
                {/* Navbar */}
                <Nav/>
            </section>
        </Fragment>
    )
}

// header 
const Header = () => {
    // states from store
    const settings = useSelector(state => state.app.settings);
    // jsx content
    return (
        <header className='dashboard-main-container--header'>
            <div className='dashboard-main-container--header-container'>
                <div>
                    {settings && <>
                        <img src={settings.app_logo} alt={settings.app_name} className='header-img'/>
                        <a herf='#' className='header-brand'>{settings.app_name}</a>
                    </>}
                </div>
                <div className='dashboard-main-container--header-container-toggle'>
                    <i className='las la-bars'></i>
                </div>
            </div>
        </header>
    );
}
// navbar
const Nav = () => {
    // jsx content
    return (
        <div className='dashboard-main-container--nav' id='navbar'>
            <nav className='dashboard-main-container--nav-container'>
                 <div>
                     <a href='#' className='nav-link nav-logo'>
                        <i className="las la-compact-disc"></i>
                        <span>Sense</span>
                     </a>

                     <div className='nav-list'>
                         <div className='nav-item'>
                             <h3 className='nav-subtitle'>Profile</h3>
                             <a href='#' className='nav-link'>
                                 <i className='las la-home nav-icon'></i>
                                 <span className='nav-name'>Home</span>
                             </a>
                             <a href='#' className='nav-link'>
                                 <i className='las la-envelope nav-icon'></i>
                                 <span className='nav-name'>Notification</span>
                             </a>
                         </div>
                     </div>
                 </div>

                 <a href='#' className='nav-link'>
                    <i className="las la-sign-out-alt"></i>
                    <span className='nav-name'>Logout</span>
                 </a>
            </nav>
        </div>
    );
} 

// 
Dashboard.propTypes = {

}

export default Dashboard;
