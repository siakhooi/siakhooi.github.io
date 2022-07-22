import React from 'react'
import renderer from 'react-test-renderer'
import MyLinkGroup from '../MyLinkGroup'

it('MyLinkGroup/1', () => {
  const component =
    renderer.create(
      <MyLinkGroup><li>hello</li><li>hello</li></MyLinkGroup>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
