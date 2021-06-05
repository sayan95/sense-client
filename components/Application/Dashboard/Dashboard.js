// dependency imports
import React, { Fragment, useEffect } from "react";
import dynamic from 'next/dynamic';
import PropTypes from "prop-types";
import { useSelector } from "react-redux";


// component imports
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

// dynamic component imports
const Progressbar = dynamic(() => import('../../UI/Progressbar/Progressbar'));



// Dashboard component
const Dashboard = ({children, sidebarItems, logoutAction}) => {
    // states from store
    const settings = useSelector((state) => state.app.settings);
    const loading = useSelector(state => state.therapistAuth.loading);

    //side effects
    useEffect(() => {
        // toggle sidebar
        showSidebarHandler('headerToggle', 'sidebar');
    }, []);

    // show sidebar handler
    const showSidebarHandler = (headerToggle, sidebar) => {
        const toggleBtn = document.getElementById(headerToggle);
        const sidenav = document.getElementById(sidebar);

        if(headerToggle, sidebar){
            toggleBtn.addEventListener('click', () => {
                sidenav.classList.toggle('show-menu');
                toggleBtn.classList.toggle('la-times');
            });
        }
    }

    // jsx content
    return (
        <Fragment>
            <section className="dashboard-main-container">
                {/* progressbar */}
                {loading && <Progressbar/>}
                {/* header */}
                <DashboardHeader settings={settings}/>
                
                {/* Navbar */}
                <DashboardSidebar settings={settings} sidebarItems={sidebarItems} logoutAction={logoutAction}/>
                
                {/* Main content */}
                <main className='dashboard-main-container-content'>
                    {children}
                </main>
            </section>
        </Fragment>
    );
};

// props validation
Dashboard.propTypes = {
    sidebarItems: PropTypes.array.isRequired,
    logoutAction: PropTypes.func.isRequired
};

export default Dashboard;
