// dependecy imports
import React, { Fragment } from 'react';

// Navbar collapsible area
const NavCollapsible = ({children}) => {
    return (
        <Fragment>
            <div className='navbar-collapsible'>
                {children}
            </div>
        </Fragment>
    )
}

export default NavCollapsible;
