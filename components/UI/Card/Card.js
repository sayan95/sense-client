import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Card = ({height, width, children, border, evelation})=> {
    return (
        <Fragment>
            <div style={{ height:height, width:width }} className={`card ${border && 'card-border'}`}>
                {children}
            </div>
        </Fragment>
    )
}
// default props
Card.defaultProps = {
    height: 'auto',
    width: 'auto',
    border: false,
}

// prop validation
Card.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string, 
    border: PropTypes.bool,
    evelation: PropTypes.string
}

export default Card
