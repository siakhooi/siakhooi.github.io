import React from 'react'
import PropTypes from 'prop-types'

MyMenuBody.propTypes = {
  children: PropTypes.array
}

function MyMenuBody (props) {
  return (
    <div className="MyMenuBody">{props.children}</div>
  )
}

export default MyMenuBody
