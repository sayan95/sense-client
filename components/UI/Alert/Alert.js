import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// alert component
const Alert = ({type, content}) => {
    const [alertType, setAlertType] = useState('alert-primary');
    const [iconClass, setIconClass] = useState('la-info-circle');

    // component side effect
    useEffect(() => {
        if(type){ 
            setAlertType(`alert-${type}`);                                  // decides the alert type and color 
            
            // decides icon class based 
            type === 'primary'                                  
            ? setIconClass('la-info-circle')
            : type === 'success' 
            ? setIconClass('la-check-circle')
            : setIconClass('la-info-circle')  
        }      
    }, [type]);

    return (
        <Fragment>
            <div className={`alert ${alertType} animate__animated animate__fadeInRight animate__fast`}>
                <p className='alert-content'>
                    <span className='alert-content-icon'><i className={`las ${iconClass}`}></i></span>
                    <span className='alert-content-text'>{content}</span>
                </p>
            </div>
        </Fragment>
    )
}

// default props
Alert.defaultProps = {
    type: 'primary'
}

// props validation
Alert.propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.string
}

export default Alert
