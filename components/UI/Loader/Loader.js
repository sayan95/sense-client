import React, { Fragment } from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types'

// Loader component
const Loader = () => {
    return (
        <Fragment>
            <Head><title>Sense - please wait</title></Head>
            <div className='loader-container'>
                <div align="center" className="cssload-fond">
                    <div className="cssload-container-general">
                        <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_1">&nbsp;</div></div>
                        <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_2">&nbsp;</div></div>
                        <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_3">&nbsp;</div></div>
                        <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_4">&nbsp;</div></div>
                    </div>
                </div>
                <div className='loading-text'>
                    <p>Please wait a moment</p>
                </div>
            </div>
        </Fragment>
    )
}

// props validation
Loader.propTypes = {
    //
}

export default Loader
