import React from 'react'
import { render, screen } from '@testing-library/react'
import MyMenuGroupHeader from '../MyMenuGroupHeader'

it('MyMenuGroupHeader/1', () => {
  const { container } = render(
    <MyMenuGroupHeader>Hello Data</MyMenuGroupHeader>
  )
  const header = screen.getByRole('heading', { level: 2 })
  expect(header).toHaveTextContent('Hello Data')
  expect(header).toHaveClass('MyMenuGroupHeader')
  expect(container.firstChild).toMatchSnapshot()
})
