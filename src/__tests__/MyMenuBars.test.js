import React from 'react'
import renderer from 'react-test-renderer'
import MyMenuBars from '../MyMenuBars'

it('MyMenuBars/1', () => {
  const dummyFunction = jest.fn()

  const component =
    renderer.create(
      <MyMenuBars onClick={dummyFunction} />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()
  expect(dummyFunction).toHaveBeenCalled()
})
