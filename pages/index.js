import React, { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// component imports
import SenseNavbar from '../components/UI/Navbar/Navbar'
import BigFooter from '../components/UI/BigFooter/BigFooter';

// Sense landing page
const Home = () => {
  // local states
  const navItems = [
    {label: 'Login', href: '/therapist/auth/identity?page=sign-in'},
    {label: 'Signup', href: '#'}
  ]
  // jsx contents
  return (
    <Fragment>
      <Head><title>Sense</title></Head>

      {/* main section */}
      <section className='sense-main'>
        {/* Navbar */}
        <SenseNavbar navItems={navItems} page='sense-landing'/>
        
        {/* Landing showcase */}
        <div className='sense-main--showcase'>
          {/* Left sub section */}
          <div className='sense-main--showcase-left'>
            {/* Big heading */}
            <div className='heading-container'>
              <h3 className='sub-heading'>sense</h3>
              <h1 className='big-heading'>
                <span>Bringing Mental</span>
                <span>Health To All</span>
              </h1>
              <p className='small-line'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            {/* News letter */}
            <div className='news-letter'>
              <h6 className='news-letter-heading'>Subscribe to be the first to know about our launch...</h6>
              <div className='news-letter-input-box'>
                <input type='text' name='email' placeholder='Email'/>
                <button className='sense-landing-btn'>Subscribe</button>
              </div>
            </div> 
          </div>


          {/* Right sub section */}
          <div className='sense-main--showcase-right'>
            <div className='image-container'>
              <img src='/assets/svgs/happy-place.svg' alt='' />
            </div>
          </div>
        </div>
      
        {/* services / features */}
        <div className='sense-main--service'>
          
        </div>
      </section>
    </Fragment>
  )
}

export default Home;
