import React from 'react'
import PropTypes from 'prop-types'

MyMenuTitle.propTypes = {
  title: PropTypes.string
}

function MyMenuTitle (props) {
  return (
    <span className="MyMenuTitle">{props.title}</span>
  )
}

export default MyMenuTitle
