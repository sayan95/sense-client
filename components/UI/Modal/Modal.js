// dependency imports
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

// modal component
const Modal = ({heading, footer, children, visibility, close}) => {
 
    return (
        <Fragment>
            {/* modal container */}
            <div className={`modal ${visibility ? 'modal-appear' : 'modal-disappear'}`}>
                <div className='modal-head'>
                    <h3>{heading}</h3>
                    <span onClick={close} className='modal-close-btn'>&times;</span>
                </div>
                {children}
            </div>

            {/* backdrop */}
            <div className={`backdrop ${visibility ? 'visible' : 'hidden'}`}></div>
        </Fragment>
    )
}

// Modal body
export const ModalBody = ({children}) => {
    return (
        <div className='modal-body'> 
            {children}
        </div>
    );
}

// footer component
export const ModalFooter = ({children}) => {
    return (
        <div className='modal-footer'>
            {children}
        </div>
    )
}

// default props
Modal.defaultProps = {
    visibility: false
}

// props validation
Modal.propTypes = {
    heading: PropTypes.string,
    visibility: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
}

export default Modal;
