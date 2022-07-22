import React from 'react'
import PropTypes from 'prop-types'

MyMenuBars.propTypes = {
  onClick: PropTypes.func
}

function MyMenuBars (props) {
  return (
    <button className="MyMenuBars fa fa-bars" onClick={() => props.onClick()} />
  )
}

export default MyMenuBars
