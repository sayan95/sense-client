import React, { Fragment } from "react";
import Link from 'next/link';
import PropTypes from "prop-types";

// Dashboard sidebar component
const DashboardSidebar = ({ settings, sidebarItems }) => {
  return (
    <Fragment>
      <div className="dashboard-main-container--nav" id="sidebar">
        <nav className="dashboard-main-container--nav-container">
          <div>
            <a href="#" className="nav-link nav-logo">
              {settings && (
                <>
                  <img src={settings.app_logo} alt={settings.app_name} />
                  <span className="nav-logo-name">{settings.app_name}</span>
                </>
              )}
            </a>

            {/* Nav list */}
            <div className="nav-list">
              {sidebarItems.map((sidebarItem, index) => {
                return (
                  // nav item
                  <div key={index} className="nav-item">
                    <h3 className="nav-subtitle">{sidebarItem.subtitle}</h3>
                    {sidebarItem.subItems.map((item, index) => {
                      return !item.isDropdown ? (
                        <Link key={index} href={item.href}>
                          <a className="nav-link">
                            <i className={`las ${item.icon} nav-icon`}></i>
                            <span className="nav-name">{item.title}</span>
                          </a>
                        </Link>
                      ) : (
                        <div key={index} className="nav-dropdown">
                          <a href="#" className="nav-link">
                            <i className={`las ${item.icon} nav-icon`}></i>
                            <span className="nav-name">{item.title}</span>
                            <i className="las la-angle-down nav-dropdown-icon"></i>
                          </a>
                          <div className="nav-dropdown--collapse">
                            <div className="nav-dropdown-content">
                              {item.dropdownItems.map((di, index) => {
                                return (
                                  <Link key={index} href={di.href}>
                                    <a className="nav-dropdown-item">
                                      {di.dropdownTitle}
                                    </a>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          <a href="#" className="nav-link-logout">
            <i className="las la-sign-out-alt nav-icon"></i>
            <span className="nav-name">Logout</span>
          </a>
        </nav>
      </div>
    </Fragment>
  );
};

// props validation
DashboardSidebar.propTypes = {
  settings: PropTypes.object.isRequired,
  sidebarItems: PropTypes.array.isRequired,
};

export default DashboardSidebar;
