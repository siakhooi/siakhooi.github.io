import React from 'react'
import PropTypes from 'prop-types'

MyMenuHeader.propTypes = {
  selected: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string
}

function MyMenuHeader (props) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <button className="MyMenuHeader" currentTab={props.selected} onClick={props.onClick}>{props.name}</button>
  )
}
export default MyMenuHeader
