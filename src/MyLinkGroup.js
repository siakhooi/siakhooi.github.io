import React from 'react'
import PropTypes from 'prop-types'

MyLinkGroup.propTypes = {
  children: PropTypes.array
}

function MyLinkGroup (props) {
  return (
    <div className='MyLinkGroup'>
      <ul className="MyLinkGroup">{props.children}</ul>
    </div>
  )
}
export default MyLinkGroup
