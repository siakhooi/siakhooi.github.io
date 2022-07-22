import React from 'react'
import PropTypes from 'prop-types'

MyMenuNav.propTypes = {
  displayNav: PropTypes.string,
  children: PropTypes.array
}

function MyMenuNav (props) {
  return (
    <div className="MyMenuNav" displayNav={props.displayNav}>{props.children}</div>
  )
}

export default MyMenuNav
