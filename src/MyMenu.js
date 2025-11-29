import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MyMenuBody from './MyMenuBody'
import MyMenuGroup from './MyMenuGroup'
import MyMenuGroupCard from './MyMenuGroupCard'
import MyMenuGroupHeader from './MyMenuGroupHeader'
import MyLinkGroup from './MyLinkGroup'
import MyLink from './MyLink'
import MyMenuHeaders from './MyMenuHeaders'

MyMenu.propTypes = {
  menu: PropTypes.object
}

function MyMenu (props) {
  const [displayTab, setDisplayTab] = useState(0)
  const body = []

  const headers = props.menu.menu.map((x, i) => {
    if (i === displayTab) {
      x.menu.forEach((x, i) => {
        const y = x.menu.map((x1, i1) => {
          return <MyLink key={`${x1.name}-${i1}`} url={x1.url} desc={x1.description} name={x1.name} />
        })
        body.push(
          <MyMenuGroup key={`${x.name}-${i}`}>
            <MyMenuGroupCard>
              <MyMenuGroupHeader>{x.name}</MyMenuGroupHeader>
              <MyLinkGroup>{y}</MyLinkGroup>
            </MyMenuGroupCard>
          </MyMenuGroup>
        )
      })
    }
    return x.name
  })
  return <div className="MyMenu">
    <MyMenuHeaders displayTab={displayTab} o={headers} setDisplayTab={setDisplayTab} />
    <MyMenuBody>{body}</MyMenuBody>
  </div>
}
export default MyMenu
