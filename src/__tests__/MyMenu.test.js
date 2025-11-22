import React from 'react'
import { render } from '@testing-library/react'
import MyMenu from '../MyMenu'
import fs from 'fs'

it('MyMenu/1', () => {
  const menu = JSON.parse(fs.readFileSync('./src/__tests__/sample.json', { encoding: 'utf8' }))

  const { container } = render(
    <MyMenu menu={menu} />
  )

  const menuDiv = container.querySelector('.MyMenu')
  expect(menuDiv).toBeInTheDocument()
  expect(container.firstChild).toMatchSnapshot()
})
