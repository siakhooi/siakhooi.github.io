import React from 'react'
import renderer from 'react-test-renderer'
import MyMenuHeaders from '../MyMenuHeaders'

it('MyMenuHeaders/1', () => {
  const dummyFunction = jest.fn()

  const headers = ['Header 1', 'Header 2', 'Header 3']

  const component =
    renderer.create(
      <MyMenuHeaders displayTab={0} o={headers} setDisplayTab={dummyFunction} />
    )
  expect(component.toJSON()).toMatchSnapshot()
})

it('MyMenuHeaders/2', () => {
  const dummyFunction = jest.fn()

  const headers = ['Header 1', 'Header 2', 'Header 3']

  let component
  renderer.act(() => {
    component = renderer.create(
      <MyMenuHeaders displayTab={1} o={headers} setDisplayTab={dummyFunction} />
    )
  })
  expect(component.toJSON()).toMatchSnapshot()

  renderer.act(() => {
    component.toJSON()
      .children.find(x => { return x.props.className === 'MyMenuResponsiveNav' })
      .children.find(x => { return x.props.className.indexOf('MyMenuBars') !== -1 })
      .props.onClick() // setDisplayNav
  })
  expect(component.toJSON()).toMatchSnapshot()

  renderer.act(() => {
    component.toJSON()
      .children.find(x => { return x.props.className === 'MyMenuResponsiveNav' })
      .children.find(x => { return x.props.className.indexOf('MyMenuBars') !== -1 })
      .props.onClick()
  })
  expect(component.toJSON()).toMatchSnapshot()

  renderer.act(() => {
    component.toJSON()
      .children.find(x => { return x.props.className === 'MyMenuNav' })
      .children[1]
      .props.onClick() // setDisplayTab
  })
  expect(dummyFunction).toBeCalled()
  expect(component.toJSON()).toMatchSnapshot()

  renderer.act(() => {
    component.toJSON()
      .children.find(x => { return x.props.className === 'MyMenuNav' })
      .children[0]
      .props.onClick()
  })
  expect(component.toJSON()).toMatchSnapshot()
})
