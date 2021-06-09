import React, { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// Dashboard header component
const DashboardHeader = ({settings}) => {
    // state from store
    const user = useSelector(state => state.therapistAuth.user);

    // jsx content
    return (
        <Fragment>
            <header className="dashboard-main-container--header">
                <div className="dashboard-main-container--header-container">
                    {settings && (
                        <>
                            <div className='header-user'>
                                <span>{user.email}</span>
                                <img
                                    src='/assets/svgs/avatar-male.svg'
                                    alt={settings.app_name}
                                    className="header-img"
                                />
                            </div>
                            <Link href="/">
                                <a className="header-brand">
                                    {settings.app_name}
                                </a>
                            </Link>
                        </>
                    )}
                    <div className="dashboard-main-container--header-container-toggle">
                    <i id="headerToggle" className="las la-bars"></i>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

// props validation
DashboardHeader.propTypes = {
    settings: PropTypes.object
}

export default DashboardHeader
