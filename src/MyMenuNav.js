import React from 'react'
import PropTypes from 'prop-types'

MyMenuNav.propTypes = {
  displayNav: PropTypes.string,
  children: PropTypes.array
}

function MyMenuNav (props) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className="MyMenuNav" displayNav={props.displayNav}>{props.children}</div>
  )
}

export default MyMenuNav
