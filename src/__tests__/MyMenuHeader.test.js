import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyMenuHeader from '../MyMenuHeader'

it('MyMenuHeader/1', async () => {
  const dummyFunction = jest.fn()
  const user = userEvent.setup()

  const { container } = render(
    <MyMenuHeader onClick={dummyFunction} selected='Y' name='Hello World' />
  )

  const button = screen.getByRole('button', { name: 'Hello World' })
  expect(button).toHaveClass('MyMenuHeader')
  expect(button).toHaveAttribute('data-current-tab', 'Y')
  expect(container.firstChild).toMatchSnapshot()

  await user.click(button)
  expect(dummyFunction).toHaveBeenCalled()
})
