// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// progresss bar component
const Progressbar = () => {
    return (
        <Fragment>
            <div className='linearProgressMaterial'>
                <div className='bar bar1'/>
                <div className='bar bar2' />
            </div>
        </Fragment>
    )
}

// props validation
Progressbar.propTypes = {

}

export default Progressbar;
