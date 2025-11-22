import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyMenuBars from '../MyMenuBars'

it('MyMenuBars/1', async () => {
  const dummyFunction = jest.fn()
  const user = userEvent.setup()

  const { container } = render(
    <MyMenuBars onClick={dummyFunction} />
  )

  const button = screen.getByRole('button')
  expect(button).toHaveClass('MyMenuBars', 'fa', 'fa-bars')
  expect(container.firstChild).toMatchSnapshot()

  await user.click(button)
  expect(dummyFunction).toHaveBeenCalled()
})
