// dependency imports
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// component imports
import Navbar from '@components/UI/Navbar/Navbar';
import BigFooter from '@components/UI/BigFooter/BigFooter';

// main sense app landing page layout
const SenseMainLayout = ({pageTitle, children, navItemsCenter, navItemsRight}) => (
    <Fragment>
        {/* document head */}
        <Head><title>{pageTitle}</title></Head>

        {/* Document body */}
        <Fragment>
            <section className='sense-main'>
                {/* Navbar */}
                <Navbar navItemsCenter={navItemsCenter} navItemsRight={navItemsRight} page='sense-landing' />

                {/* main section */}
                <Fragment>
                    {children}
                </Fragment>

                {/* Footer */}
                <BigFooter />
            </section>
        </Fragment>
    </Fragment>
)

// props validation
SenseMainLayout.prototype = {
    pageTitle: PropTypes.string.isRequired,
    navItemsCenter: PropTypes.array,
    navItemsRight: PropTypes.array.isRequired
}

export default SenseMainLayout
