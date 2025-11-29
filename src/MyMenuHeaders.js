import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MyMenuResponsiveNav from './MyMenuResponsiveNav'
import MyMenuNav from './MyMenuNav'
import MyMenuHeader from './MyMenuHeader'

MyMenuHeaders.propTypes = {
  displayTab: PropTypes.number,
  o: PropTypes.array,
  setDisplayTab: PropTypes.func
}

function MyMenuHeaders (props) {
  const [displayNav, setDisplayNav] = useState(0)

  let title
  const headers = props.o.map((x, i) => {
    let selected = 'N'
    if (i === props.displayTab) {
      title = x
      selected = 'Y'
    }
    return (
      <MyMenuHeader key={`${x}-${i}`} id={`${x}-${i}`} name={x} selected={selected} onClick={() => { props.setDisplayTab(i); setDisplayNav(0) }}></MyMenuHeader>
    )
  })
  return (
    <div className="MyMenuHeaders">
      <MyMenuResponsiveNav title={title} onClick={() => setDisplayNav((displayNav === 1 ? 0 : 1))} />
      <MyMenuNav displayNav={displayNav === 1 ? 'Y' : 'N'}>{headers}</MyMenuNav>
    </div>
  )
}

export default MyMenuHeaders
