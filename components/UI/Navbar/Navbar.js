import React, { Fragment, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


// navbar component
const Navbar = ({navItems, page}) => {
    // states from store
    const settings = useSelector(state => state.app.settings);      // app settings info

    // local state
    const scrollAllowedInPages = ['therapist-create-profile'];
    
    // side effects
    useEffect(() => {        
      // allow scroll behaviour for white-listed pages
      if(scrollAllowedInPages.includes(page)){
        window.onscroll = () => {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                const element = document.getElementById("navBar");
                element && element.classList.add('floatingNav');
            } else {
                const element = document.getElementById("navBar");
                element && element.classList.remove('floatingNav');
            }
        }
      }
    }, [page])

    // jsx content
    return (
        <Fragment>
          <nav id="navBar" className='navbar'>
              {/* collapsible content */}
              <div className='navbar-collapsible'>

                  {/* Navbar brand  */}
                  <div className='navbar-brand'>
                      {settings && <Image className='brand-image' src={settings.app_logo} alt={settings.app_name} width='45' height='45' quality='100' priority={true}/>}
                      <a href='#'>
                          {settings && <span>{settings.app_name}</span>}
                      </a>
                  </div>

                  {/* Nav items */}
                  {navItems && <>
                    <ul className='navbar-nav'>
                      {navItems.map(item => {
                        return (
                          <li key={item.label} className='nav-item'>
                              <a href={item.href} className='active nav-link' onClick={item.action}>{item.label}</a>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                  }
              </div>
          </nav>
        </Fragment>
    )
}

// props validation
Navbar.propTypes = {
  navItems: PropTypes.array
}

export default Navbar
