import React from 'react'
import renderer from 'react-test-renderer'
import MyMenuBody from '../MyMenuBody'

it('MyMenuBody/1', () => {
  const component =
    renderer.create(
      <MyMenuBody><div>ABC</div><div>ABC</div></MyMenuBody>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
