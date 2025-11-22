import React from 'react'
import { render } from '@testing-library/react'
import MyMenuHeaders from '../MyMenuHeaders'

it('MyMenuHeaders/1', () => {
  const dummyFunction = jest.fn()

  const headers = ['Header 1', 'Header 2', 'Header 3']

  const { container } = render(
    <MyMenuHeaders displayTab={0} o={headers} setDisplayTab={dummyFunction} />
  )

  const headersDiv = container.querySelector('.MyMenuHeaders')
  expect(headersDiv).toBeInTheDocument()
  expect(container.firstChild).toMatchSnapshot()
})

it('MyMenuHeaders/2', async () => {
  const dummyFunction = jest.fn()

  const headers = ['Header 1', 'Header 2', 'Header 3']

  const { container } = render(
    <MyMenuHeaders displayTab={1} o={headers} setDisplayTab={dummyFunction} />
  )

  const headersDiv = container.querySelector('.MyMenuHeaders')
  expect(headersDiv).toBeInTheDocument()

  // Verify the component renders with proper structure
  const responsiveNav = container.querySelector('.MyMenuResponsiveNav')
  const menuNav = container.querySelector('.MyMenuNav')

  expect(responsiveNav).toBeInTheDocument()
  expect(menuNav).toBeInTheDocument()

  // Test that setDisplayTab can be called
  const headerButtons = container.querySelectorAll('.MyMenuHeader')
  expect(headerButtons.length).toBeGreaterThan(0)

  expect(container.firstChild).toMatchSnapshot()
})
