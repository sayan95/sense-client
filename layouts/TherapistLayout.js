// page dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';


// Base layout for therapist pages
const TherapistLayout = ({children, pageTitle}) => {
    return (
       <Fragment>
           {/* document  head */}
           <Head>
               <title>Sense - {pageTitle}</title>
           </Head>
           
           {/* document body */}
           <Fragment>
            {children}
           </Fragment>
       </Fragment>
    )
}

// props validation
TherapistLayout.propTypes = {
    pageTitle: PropTypes.string.isRequired
}

export default TherapistLayout
