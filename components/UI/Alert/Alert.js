import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// alert component
const Alert = props => {
    return (
        <Fragment>
            <div className='alert alert-primary'>
                <p className='alert-content'>
                    <span className='alert-content-icon'><i className='las la-info-circle'></i></span>
                    <span className='alert-content-text'>An OTP has been sent to your email. Please check your email.</span>
                </p>
            </div>
        </Fragment>
    )
}

// props validation
Alert.propTypes = {

}

export default Alert
