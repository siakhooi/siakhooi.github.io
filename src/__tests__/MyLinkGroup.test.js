import React from 'react'
import { render } from '@testing-library/react'
import MyLinkGroup from '../MyLinkGroup'

it('MyLinkGroup/1', () => {
  const { container } = render(
    <MyLinkGroup><li>hello</li><li>hello</li></MyLinkGroup>
  )
  const ul = container.querySelector('.MyLinkGroup')
  expect(ul).toBeInTheDocument()
  expect(ul.querySelectorAll('li')).toHaveLength(2)
  expect(container.firstChild).toMatchSnapshot()
})
