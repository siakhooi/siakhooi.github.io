import React from 'react'
import renderer from 'react-test-renderer'
import MyMenuHeader from '../MyMenuHeader'

it('MyMenuHeader/1', () => {
  const dummyFunction = jest.fn()

  const component =
    renderer.create(
      <MyMenuHeader onClick={dummyFunction} selected='Y' name='Hello World' />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()
  expect(dummyFunction).toHaveBeenCalled()
})
