// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// rigt aligned nav items
const NavItemRight = ({navItemsRight}) => {
    return (
        <Fragment>
            {navItemsRight && (
            <Fragment>
              <ul id="collpsible" className="collpsible-right navbar-nav-right">
                {navItemsRight.map((item) => {
                  return !item.isDropdown ? (
                    <li key={item.label} className="nav-item">
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
                                <a href={menu.menuLink} className="nav-dropdown-menu-item-link">
                                  {menu.menuLabel}
                                </a>
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

// props validation
NavItemRight.propTypes = {
    navItemsRight: PropTypes.array
}

export default NavItemRight
