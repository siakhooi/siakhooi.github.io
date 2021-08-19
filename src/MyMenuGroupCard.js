import React from 'react'
import PropTypes from 'prop-types'

MyMenuGroupCard.propTypes = {
  children: PropTypes.array
}
function MyMenuGroupCard (props) {
  return (
    <div className="MyMenuGroupCard">{props.children}</div>
  )
}

export default MyMenuGroupCard
