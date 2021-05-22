import React from 'react';

// navbar component
const Navbar = ({children}) => {
    return (
        <nav className='navbar'>
          <div className='navbar-brand'>
              <h3>
                <span className='navbar-brand--name1'>Sense</span>
                <span className='navbar-brand--name2'>T</span>
                <span className='navbar-brand--name3'>herapist</span>
              </h3>
              <small>Bringing mental health to all</small>
          </div>

          <div className='navbar-nav'>
            <ul className=''>
              <li className=''><a href='#' className=''></a></li>
            </ul>
          </div>
        </nav>
    )
}


export default Navbar
