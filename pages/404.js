import React, { Fragment } from 'react'
import Head from 'next/head';

// Custom 4040 page
const Error404 = () => {
    return (
        <Fragment>
            <Head>
                <title>404 - Page not found !</title>
            </Head>
            <div>
                This page was not found
            </div>
        </Fragment>
    )
}

export default Error404;
