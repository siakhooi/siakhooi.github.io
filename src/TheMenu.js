import React from 'react'
import ReactDOM from 'react-dom'
import MyMenu from './MyMenu'

function renderMyMenu (url, id) {
  return fetch(url)
    .then(response => response.json())
    .then(menu => {
      ReactDOM.render(
        <MyMenu menu={menu} />,
        document.getElementById(id)
      )
    })
}

export { renderMyMenu }
