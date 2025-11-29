import React from 'react'
import PropTypes from 'prop-types'

MyMenuHeader.propTypes = {
  selected: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string
}

function MyMenuHeader (props) {
  return (
    <button className="MyMenuHeader" data-current-tab={props.selected} onClick={props.onClick}>{props.name}</button>
  )
}
export default MyMenuHeader
