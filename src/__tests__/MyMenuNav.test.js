import React from 'react'
import { render } from '@testing-library/react'
import MyMenuNav from '../MyMenuNav'

it('MyMenuNav/Y', () => {
  const { container } = render(
    <MyMenuNav displayNav='Y'><div>ABC</div><div>ABC</div></MyMenuNav>
  )
  const nav = container.querySelector('.MyMenuNav')
  expect(nav).toBeInTheDocument()
  expect(nav).toHaveAttribute('displaynav', 'Y')
  expect(container.firstChild).toMatchSnapshot()
})

it('MyMenuNav/N', () => {
  const { container } = render(
    <MyMenuNav displayNav='N'><div>ABC</div><div>ABC</div></MyMenuNav>
  )
  const nav = container.querySelector('.MyMenuNav')
  expect(nav).toBeInTheDocument()
  expect(nav).toHaveAttribute('displaynav', 'N')
  expect(container.firstChild).toMatchSnapshot()
})
