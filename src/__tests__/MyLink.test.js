import React from 'react'
import { render, screen } from '@testing-library/react'
import MyLink from '../MyLink'

it('MyLink/1', () => {
  const { container } = render(
    <MyLink
      url={'http://www.google.com'}
      name={'Google'}
    />
  )
  const link = screen.getByRole('link', { name: 'Google' })
  expect(link).toHaveAttribute('href', 'http://www.google.com')
  expect(link).toHaveAttribute('rel', 'nofollow')
  expect(container.firstChild).toMatchSnapshot()
})

it('MyLink/2', () => {
  const { container } = render(
    <MyLink
      url={'http://www.google.com'}
      name={'Google'}
      desc={'Search Engine'}
    />
  )
  const link = screen.getByRole('link', { name: 'Google' })
  expect(link).toHaveAttribute('href', 'http://www.google.com')
  expect(link).toHaveAttribute('rel', 'nofollow')
  // desc is rendered as text after the link
  expect(container.firstChild).toHaveTextContent('Google- Search Engine')
  expect(container.firstChild).toMatchSnapshot()
})
