import React from 'react'
import renderer from 'react-test-renderer'
import MyMenu from '../MyMenu'
import fs from 'fs'

it('MyMenu/1', () => {
  const menu = JSON.parse(fs.readFileSync('./src/__tests__/sample.json', { encoding: 'utf8' }))

  const component =
    renderer.create(
      <MyMenu menu={menu} />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
