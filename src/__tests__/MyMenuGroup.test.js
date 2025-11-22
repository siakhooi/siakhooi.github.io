import React from 'react'
import { render } from '@testing-library/react'
import MyMenuGroup from '../MyMenuGroup'

it('MyMenuGroup/1', () => {
  const { container } = render(
    <MyMenuGroup><div>ABC</div></MyMenuGroup>
  )
  const group = container.querySelector('.MyMenuGroup')
  expect(group).toBeInTheDocument()
  expect(group.querySelector('div')).toHaveTextContent('ABC')
  expect(container.firstChild).toMatchSnapshot()
})
