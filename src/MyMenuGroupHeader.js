import React from 'react'
import PropTypes from 'prop-types'

MyMenuGroupHeader.propTypes = {
  children: PropTypes.string
}

function MyMenuGroupHeader (props) {
  return (
    <h2 className="MyMenuGroupHeader">{props.children}</h2>
  )
}
export default MyMenuGroupHeader
