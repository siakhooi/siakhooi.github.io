import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyMenuResponsiveNav from '../MyMenuResponsiveNav'

it('MyMenuResponsiveNav/1', async () => {
  const dummyFunction = jest.fn()
  const user = userEvent.setup()

  const { container } = render(
    <MyMenuResponsiveNav title='Hello World' onClick={dummyFunction} />
  )

  const nav = container.querySelector('.MyMenuResponsiveNav')
  expect(nav).toBeInTheDocument()
  expect(container.firstChild).toMatchSnapshot()

  const button = screen.getByRole('button')
  await user.click(button)
  expect(dummyFunction).toHaveBeenCalled()
})
