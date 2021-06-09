import React, { Fragment, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


// navbar component
const Navbar = ({navItems, page}) => {
    // states from store
    const settings = useSelector(state => state.app.settings);      // app settings info

    // local state
    const scrollAllowedInPages = ['therapist-create-profile', 'sense-landing'];
    
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

    // small screen collapse behaviour handler
    const navCollapseHandler = () => {
      const collapsible = document.getElementById('collpsible');
      collapsible.classList.toggle('h-full');
    }

    // jsx content
    return (
        <Fragment>
          <nav id="navBar" className='navbar'>
            
              {/* collapsible content */}
              <div className='navbar-collapsible'>
                  {/* Navbar brand  */}
                  <div className='navbar-brand'>
                      {settings && <Image className='brand-image' src={settings.app_logo} alt={settings.app_name} width='45' height='45' quality='100' priority={true}/>}
                      <Link href='/'>
                        <a>
                            {settings && <span>{settings.app_name}</span>}
                        </a>
                      </Link>
                  </div>

                  {/* Nav items */}
                  {navItems && <>
                    <ul id='collpsible' className='navbar-nav'>
                      {navItems.map(item => {
                        return (
                          <li key={item.label} className='nav-item'>
                              <Link href={item.href}>
                                <a className='active nav-link' onClick={item.action}>{item.label}</a>
                              </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                  }

                  {/* Collapsible contrlol */}
                  <span onClick={navCollapseHandler} className='collapse-btn'><i className='las la-bars'></i></span>
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
