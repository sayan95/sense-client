import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";



// Dashboard component
const Dashboard = ({children, sidebarItems}) => {
    // states from store
    const settings = useSelector((state) => state.app.settings);

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
                {/* header */}
                <DashboardHeader settings={settings}/>
                
                {/* Navbar */}
                <DashboardSidebar settings={settings} sidebarItems={sidebarItems}/>
                
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
    sidebarItems: PropTypes.array.isRequired
};

export default Dashboard;
