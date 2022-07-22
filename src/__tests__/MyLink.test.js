import React from 'react'
import renderer from 'react-test-renderer'
import MyLink from '../MyLink'

it('MyLink/1', () => {
  const component =
    renderer.create(
      <MyLink
        url={'http://www.google.com'}
        name={'Google'}
      />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('MyLink/2', () => {
  const component =
    renderer.create(
      <MyLink
        url={'http://www.google.com'}
        name={'Google'}
        desc={'Search Engine'}
      />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
