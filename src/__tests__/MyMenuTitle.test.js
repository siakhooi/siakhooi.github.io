import React from 'react'
import { render } from '@testing-library/react'
import MyMenuTitle from '../MyMenuTitle'

it('MyMenuTitle/1', () => {
  const { container } = render(
    <MyMenuTitle
      title={'Data Science'}
    />
  )
  const span = container.querySelector('.MyMenuTitle')
  expect(span).toHaveTextContent('Data Science')
  expect(container.firstChild).toMatchSnapshot()
})
