import React from 'react'
import renderer from 'react-test-renderer'
import MyMenuTitle from '../MyMenuTitle'

it('MyMenuTitle/1', () => {
  const component =
    renderer.create(
      <MyMenuTitle
        title={'Data Science'}
      />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
