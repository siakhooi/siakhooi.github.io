import React from 'react'
import { render } from '@testing-library/react'
import MyMenuBody from '../MyMenuBody'

it('MyMenuBody/1', () => {
  const { container } = render(
    <MyMenuBody><div>ABC</div><div>ABC</div></MyMenuBody>
  )
  const body = container.querySelector('.MyMenuBody')
  expect(body).toBeInTheDocument()
  expect(body.querySelectorAll('div')).toHaveLength(2)
  expect(container.firstChild).toMatchSnapshot()
})
