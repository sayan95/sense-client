import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Text field component
const TextField = ({label, name, placeholder, type, iconClass, error, event}) => {
    return (
        <Fragment>
            <div className='form-group-container'>
                <div className='form-group'>
                    {label && <label className='form-label'>{label}</label>}
                    <input name={name} onChange={event} type={type} className={`${iconClass ? 'form-control-icon' : 'form-control'} ${error ? 'error' : ''}`} placeholder={placeholder}/>
                    {iconClass && <i className={`${iconClass} form-icon`}></i>}
                </div>
                {error && <span className='form-error'><p>{error}</p></span>}
            </div>
        </Fragment>
    )
}

// default props
TextField.defaultProps = {
    placeholder: 'Enter the input'
}

// props validation
TextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    iconClass: PropTypes.string,
    error: PropTypes.any,
    event: PropTypes.func 
}

export default TextField
