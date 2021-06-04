import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Dashboard header component
const DashboardHeader = ({settings}) => {
    return (
        <Fragment>
            <header className="dashboard-main-container--header">
                <div className="dashboard-main-container--header-container">
                    {settings && (
                        <>
                            <img
                                src='/assets/svgs/avatar.svg'
                                alt={settings.app_name}
                                className="header-img"
                            />
                            <a herf="#" className="header-brand">
                                {settings.app_name}
                            </a>
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
    settings: PropTypes.object.isRequired
}

export default DashboardHeader
