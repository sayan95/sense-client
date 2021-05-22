import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Button component
const Button = ({children, isBlock, color, event, type, disabled}) => {
    return (
        <Fragment>
            <div className='button-container'>
                <button type={type} 
                    onClick={event} 
                    disabled={disabled}
                    className={`btn btn-${color} ${isBlock ? 'block' : ''} ${disabled ? 'btn-disabled': ''}`}
                >
                    {children}
                </button>
            </div>
        </Fragment>
    )
}

// default props
Button.defaultProps = {
    type: 'button',
    disabled: false
}

// props validation
Button.propTypes = {
    isBlock: PropTypes.bool,
    color: PropTypes.string,
    event: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool
}

export default Button
