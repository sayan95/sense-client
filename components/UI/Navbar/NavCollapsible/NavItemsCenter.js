// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// Navbar center aligned items
const NavItemsCenter = ({navItemsCenter}) => {

    // jsx content
    return (
        <Fragment>
            {navItemsCenter && (
            <Fragment>
              <ul id="collapsible" className="collpsible navbar-nav-center">
                {navItemsCenter.map((item) => {
                  return !item.isDropdown ? (
                    <li id={`menu_${item.label}`} key={item.label} className="nav-item">
                      <Link href={item.href}>
                        <a className="nav-link" onClick={item.action}>
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-dropdown">
                      <a className="nav-dropdown-action">
                        {item.label}
                        <i className="las la-angle-down dropdown-drop-arrow"></i>
                        {/* drop down menu */}
                        <ul id="nav-dropdown" className="nav-dropdown-menu">
                          {item.menuItems.map((menu) => {
                            return (
                              <li className="nav-dropdown-menu-item">
                                <Link href={menu.menuLink}>
                                  <a className="nav-dropdown-menu-item-link">
                                    {menu.menuLabel}
                                  </a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          )}
        </Fragment>
    )
}

NavItemsCenter.propTypes = {
    navItemsCenter: PropTypes.array
}

export default NavItemsCenter
