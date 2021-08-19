import React from 'react'
import PropTypes from 'prop-types'

MyMenuGroup.propTypes = {
  children: PropTypes.object
}

function MyMenuGroup (props) {
  return (
    <div className="MyMenuGroup">{props.children}</div>
  )
}
export default MyMenuGroup
