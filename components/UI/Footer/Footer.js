// dependency imports
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// sense footer component
const Footer = () => {
    return (
        <Fragment>
            <div className='footer-container'>
                <p className='footer-text '>
                    Copyright &copy; 2021 <a href='#'>Sense</a> India, Inc. All rights reserved.
                </p>
            </div>
        </Fragment>
    )
}

// props validation
Footer.propTypes = {

}

export default Footer
