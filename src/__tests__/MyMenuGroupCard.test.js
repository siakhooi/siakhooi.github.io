import React from 'react'
import { render } from '@testing-library/react'
import MyMenuGroupCard from '../MyMenuGroupCard'

it('MyMenuGroupCard/1', () => {
  const { container } = render(
    <MyMenuGroupCard><div>ABC</div><div>ABC</div></MyMenuGroupCard>
  )
  const card = container.querySelector('.MyMenuGroupCard')
  expect(card).toBeInTheDocument()
  expect(card.querySelectorAll('div')).toHaveLength(2)
  expect(container.firstChild).toMatchSnapshot()
})
