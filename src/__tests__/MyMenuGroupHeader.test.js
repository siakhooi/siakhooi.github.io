import React from 'react'
import renderer from 'react-test-renderer'
import MyMenuGroupHeader from '../MyMenuGroupHeader'

it('MyMenuGroupHeader/1', () => {
  const component =
    renderer.create(
      <MyMenuGroupHeader>Hello Data</MyMenuGroupHeader>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
