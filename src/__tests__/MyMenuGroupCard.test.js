import React from 'react'
import renderer from 'react-test-renderer'
import MyMenuGroupCard from '../MyMenuGroupCard'

it('MyMenuGroupCard/1', () => {
  const component =
    renderer.create(
      <MyMenuGroupCard><div>ABC</div><div>ABC</div></MyMenuGroupCard>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
