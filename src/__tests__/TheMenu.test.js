import React from 'react'
import { renderMyMenu } from '../TheMenu'
import { createRoot } from 'react-dom/client'

// Mock react-dom/client
jest.mock('react-dom/client', () => ({
  createRoot: jest.fn()
}))

// Mock MyMenu component
jest.mock('../MyMenu', () => {
  return function MyMenu () {
    return <div data-testid="my-menu">MyMenu Component</div>
  }
})

describe('renderMyMenu', () => {
  let mockContainer
  let mockRoot
  let originalFetch

  beforeEach(() => {
    // Setup mock container
    mockContainer = document.createElement('div')
    mockContainer.id = 'test-container'
    document.body.appendChild(mockContainer)

    // Setup mock root
    mockRoot = {
      render: jest.fn()
    }
    createRoot.mockReturnValue(mockRoot)

    // Setup mock fetch
    originalFetch = globalThis.fetch
    globalThis.fetch = jest.fn()
  })

  afterEach(() => {
    // Cleanup
    document.body.removeChild(mockContainer)
    jest.clearAllMocks()
    globalThis.fetch = originalFetch
  })

  it('should fetch data from URL and render MyMenu component', async () => {
    const mockMenu = { items: ['item1', 'item2'] }
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockMenu)
    }
    globalThis.fetch.mockResolvedValue(mockResponse)

    await renderMyMenu('https://example.com/menu.json', 'test-container')

    // Verify fetch was called with correct URL
    expect(globalThis.fetch).toHaveBeenCalledWith('https://example.com/menu.json')
    expect(globalThis.fetch).toHaveBeenCalledTimes(1)

    // Verify response.json() was called
    expect(mockResponse.json).toHaveBeenCalledTimes(1)

    // Verify createRoot was called with correct container
    expect(createRoot).toHaveBeenCalledWith(mockContainer)
    expect(createRoot).toHaveBeenCalledTimes(1)

    // Verify render was called with MyMenu component
    expect(mockRoot.render).toHaveBeenCalledTimes(1)
    const renderCall = mockRoot.render.mock.calls[0][0]
    expect(renderCall.type.name).toBe('MyMenu')
    expect(renderCall.props.menu).toEqual(mockMenu)
  })

  it('should handle fetch error', async () => {
    const mockError = new Error('Network error')
    globalThis.fetch.mockRejectedValue(mockError)

    await expect(renderMyMenu('https://example.com/menu.json', 'test-container'))
      .rejects.toThrow('Network error')

    // Verify fetch was called
    expect(globalThis.fetch).toHaveBeenCalledWith('https://example.com/menu.json')

    // Verify createRoot and render were not called
    expect(createRoot).not.toHaveBeenCalled()
    expect(mockRoot.render).not.toHaveBeenCalled()
  })

  it('should handle JSON parse error', async () => {
    const mockError = new Error('Invalid JSON')
    const mockResponse = {
      json: jest.fn().mockRejectedValue(mockError)
    }
    globalThis.fetch.mockResolvedValue(mockResponse)

    await expect(renderMyMenu('https://example.com/menu.json', 'test-container'))
      .rejects.toThrow('Invalid JSON')

    // Verify fetch and json() were called
    expect(globalThis.fetch).toHaveBeenCalledWith('https://example.com/menu.json')
    expect(mockResponse.json).toHaveBeenCalledTimes(1)

    // Verify createRoot and render were not called
    expect(createRoot).not.toHaveBeenCalled()
    expect(mockRoot.render).not.toHaveBeenCalled()
  })

  it('should handle different menu data structures', async () => {
    const mockMenu = {
      title: 'Test Menu',
      sections: [
        { name: 'Section 1', items: [] },
        { name: 'Section 2', items: [] }
      ]
    }
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockMenu)
    }
    globalThis.fetch.mockResolvedValue(mockResponse)

    await renderMyMenu('https://example.com/api/menu', 'test-container')

    // Verify the menu data is passed correctly to MyMenu
    expect(mockRoot.render).toHaveBeenCalledTimes(1)
    const renderCall = mockRoot.render.mock.calls[0][0]
    expect(renderCall.props.menu).toEqual(mockMenu)
  })

  it('should handle different container IDs', async () => {
    const anotherContainer = document.createElement('div')
    anotherContainer.id = 'another-container'
    document.body.appendChild(anotherContainer)

    const mockMenu = { items: [] }
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockMenu)
    }
    globalThis.fetch.mockResolvedValue(mockResponse)

    await renderMyMenu('https://example.com/menu.json', 'another-container')

    // Verify createRoot was called with the correct container
    expect(createRoot).toHaveBeenCalledWith(anotherContainer)

    document.body.removeChild(anotherContainer)
  })

  it('should handle empty menu data', async () => {
    const mockMenu = {}
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockMenu)
    }
    globalThis.fetch.mockResolvedValue(mockResponse)

    await renderMyMenu('https://example.com/menu.json', 'test-container')

    // Verify render was called with empty menu object
    expect(mockRoot.render).toHaveBeenCalledTimes(1)
    const renderCall = mockRoot.render.mock.calls[0][0]
    expect(renderCall.props.menu).toEqual({})
  })
})
