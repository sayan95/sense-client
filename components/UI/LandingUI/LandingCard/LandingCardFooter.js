// dependency imports
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Sense landing card footer
const LandingCardFooter = ({children}) => {
    return (
       <Fragment>
           <div className='landing-card-footer'>
               {children}
           </div>
       </Fragment>
    )
}

// props validation
LandingCardFooter.propTypes = {

}

export default LandingCardFooter
