import React from 'react'
import { render, fireEvent } from '@testing-library/react'
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

it('MyMenuHeaders/3 - should render correct number of headers', () => {
  const dummyFunction = jest.fn()
  const headers = ['Header 1', 'Header 2', 'Header 3']

  const { container } = render(
    <MyMenuHeaders displayTab={0} o={headers} setDisplayTab={dummyFunction} />
  )

  const headerButtons = container.querySelectorAll('.MyMenuHeader')
  expect(headerButtons.length).toBe(3)
  expect(headerButtons[0].textContent).toBe('Header 1')
  expect(headerButtons[1].textContent).toBe('Header 2')
  expect(headerButtons[2].textContent).toBe('Header 3')
})

it('MyMenuHeaders/4 - should call setDisplayTab when header is clicked', () => {
  const mockSetDisplayTab = jest.fn()
  const headers = ['Header 1', 'Header 2', 'Header 3']

  const { container } = render(
    <MyMenuHeaders displayTab={0} o={headers} setDisplayTab={mockSetDisplayTab} />
  )

  const headerButtons = container.querySelectorAll('.MyMenuHeader')

  // Click on second header
  fireEvent.click(headerButtons[1])
  expect(mockSetDisplayTab).toHaveBeenCalledWith(1)

  // Click on third header
  fireEvent.click(headerButtons[2])
  expect(mockSetDisplayTab).toHaveBeenCalledWith(2)
})

it('MyMenuHeaders/5 - should set correct selected attribute on active header', () => {
  const dummyFunction = jest.fn()
  const headers = ['Header 1', 'Header 2', 'Header 3']

  const { container } = render(
    <MyMenuHeaders displayTab={1} o={headers} setDisplayTab={dummyFunction} />
  )

  const headerButtons = container.querySelectorAll('.MyMenuHeader')

  // First header should not be selected
  expect(headerButtons[0].getAttribute('currentTab')).toBe('N')
  // Second header should be selected
  expect(headerButtons[1].getAttribute('currentTab')).toBe('Y')
  // Third header should not be selected
  expect(headerButtons[2].getAttribute('currentTab')).toBe('N')
})

it('MyMenuHeaders/6 - should toggle displayNav when responsive nav is clicked', () => {
  const dummyFunction = jest.fn()
  const headers = ['Header 1', 'Header 2', 'Header 3']

  const { container } = render(
    <MyMenuHeaders displayTab={0} o={headers} setDisplayTab={dummyFunction} />
  )

  const menuNav = container.querySelector('.MyMenuNav')
  const menuBars = container.querySelector('.MyMenuBars')

  // Initially displayNav should be 'N'
  expect(menuNav.getAttribute('displayNav')).toBe('N')

  // Click responsive nav button to toggle to 'Y'
  fireEvent.click(menuBars)
  expect(menuNav.getAttribute('displayNav')).toBe('Y')

  // Click responsive nav button again to toggle back to 'N'
  fireEvent.click(menuBars)
  expect(menuNav.getAttribute('displayNav')).toBe('N')
})

it('MyMenuHeaders/7 - should pass title to MyMenuTitle', () => {
  const dummyFunction = jest.fn()
  const headers = ['First Tab', 'Second Tab', 'Third Tab']

  const { container, rerender } = render(
    <MyMenuHeaders displayTab={0} o={headers} setDisplayTab={dummyFunction} />
  )

  let menuTitle = container.querySelector('.MyMenuTitle')
  expect(menuTitle.textContent).toBe('First Tab')

  // Change displayTab to 2
  rerender(
    <MyMenuHeaders displayTab={2} o={headers} setDisplayTab={dummyFunction} />
  )

  menuTitle = container.querySelector('.MyMenuTitle')
  expect(menuTitle.textContent).toBe('Third Tab')
})

it('MyMenuHeaders/8 - should render all child components', () => {
  const dummyFunction = jest.fn()
  const headers = ['Header 1', 'Header 2']

  const { container } = render(
    <MyMenuHeaders displayTab={0} o={headers} setDisplayTab={dummyFunction} />
  )

  // Check that the main div with className MyMenuHeaders exists
  const mainDiv = container.querySelector('.MyMenuHeaders')
  expect(mainDiv).toBeInTheDocument()

  // Check that MyMenuResponsiveNav is rendered
  const responsiveNav = container.querySelector('.MyMenuResponsiveNav')
  expect(responsiveNav).toBeInTheDocument()

  // Check that MyMenuNav is rendered
  const menuNav = container.querySelector('.MyMenuNav')
  expect(menuNav).toBeInTheDocument()

  // Check that MyMenuHeader components are rendered as children of MyMenuNav
  const headerButtons = menuNav.querySelectorAll('.MyMenuHeader')
  expect(headerButtons.length).toBe(2)
})

it('MyMenuHeaders/9 - should reset displayNav to 0 when header is clicked', () => {
  const mockSetDisplayTab = jest.fn()
  const headers = ['Header 1', 'Header 2', 'Header 3']

  const { container } = render(
    <MyMenuHeaders displayTab={0} o={headers} setDisplayTab={mockSetDisplayTab} />
  )

  const menuNav = container.querySelector('.MyMenuNav')
  const menuBars = container.querySelector('.MyMenuBars')
  const headerButtons = container.querySelectorAll('.MyMenuHeader')

  // Open responsive nav first (displayNav becomes 1)
  fireEvent.click(menuBars)
  expect(menuNav.getAttribute('displayNav')).toBe('Y')

  // Click on a header - this should call setDisplayNav(0)
  fireEvent.click(headerButtons[1])

  // displayNav should be reset to 0 (displayed as 'N')
  expect(menuNav.getAttribute('displayNav')).toBe('N')
  expect(mockSetDisplayTab).toHaveBeenCalledWith(1)
})
