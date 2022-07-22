import React from 'react'
import renderer from 'react-test-renderer'
import MyMenuResponsiveNav from '../MyMenuResponsiveNav'

it('MyMenuResponsiveNav/1', () => {
  const dummyFunction = jest.fn()

  const component =
    renderer.create(
      <MyMenuResponsiveNav title='Hello World' onClick={dummyFunction} />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree
    .children.find((x) => { return x.props.className.indexOf('MyMenuBars') !== -1 })
    .props.onClick()
  expect(dummyFunction).toHaveBeenCalled()
})
