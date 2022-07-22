import React from 'react'
import renderer from 'react-test-renderer'
import MyMenuGroup from '../MyMenuGroup'

it('MyMenuGroup/1', () => {
  const component =
    renderer.create(
      <MyMenuGroup><div>ABC</div></MyMenuGroup>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
