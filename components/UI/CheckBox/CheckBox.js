import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Checkbox component 
const CheckBox = ({name, label, event}) => {
    return (
        <Fragment>
            <div className='checkbox-container'>
                <input onChange={event} name={name} type='checkbox' className='checkbox-control'/>
                <label htmlFor='checkbox' className='checkbox-label'>{label && label}</label>
            </div>
        </Fragment>
    )
}

// props validation 
CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.any,
    event: PropTypes.func
}

export default CheckBox
