import React from 'react'
import renderer from 'react-test-renderer'
import MyMenuNav from '../MyMenuNav'

it('MyMenuNav/Y', () => {
  const component =
    renderer.create(
      <MyMenuNav displayNav='Y'><div>ABC</div><div>ABC</div></MyMenuNav>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('MyMenuNav/N', () => {
  const component =
    renderer.create(
      <MyMenuNav displayNav='N'><div>ABC</div><div>ABC</div></MyMenuNav>
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
