import React from 'react'
import { createRoot } from 'react-dom/client'
import MyMenu from './MyMenu'

function renderMyMenu (url, id) {
  return fetch(url)
    .then(response => response.json())
    .then(menu => {
      const container = document.getElementById(id)
      const root = createRoot(container)
      root.render(<MyMenu menu={menu} />)
    })
}

export { renderMyMenu }
