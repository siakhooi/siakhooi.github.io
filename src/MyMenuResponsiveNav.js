import React from 'react'
import PropTypes from 'prop-types'
import MyMenuTitle from './MyMenuTitle'
import MyMenuBars from './MyMenuBars'

MyMenuResponsiveNav.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
}

function MyMenuResponsiveNav (props) {
  return (
    <div className="MyMenuResponsiveNav">
      <MyMenuTitle title={props.title} />
      <MyMenuBars onClick={props.onClick} />
    </div>
  )
}

export default MyMenuResponsiveNav
