/* eslint-disable */
import { vi } from 'vitest'
import { cleanup, render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'


vi.mock('fetch')

const mockedImplementation = () => Promise.resolve({
  json() {
    return { products: [] }
  }
})

global.fetch = vi.fn(mockedImplementation)

describe('App', () => {
  afterEach(() => {
    cleanup()
  })

  it('Welcomes the user', () => {
    render(<App />)
    expect(screen.getByText(/Welcome/i)).toHaveTextContent('Welcome')
  })

  it('Should have a button to create new product', () => {
    render(<App />)
    expect(screen.getByText(/\Create Product/i)).toBeInTheDocument()
  })

  it('Should display message Loading', () => {
    render(<App />)
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
  })

  it('Should remove loading message after load products', async () => {
    render(<App />)
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i))

    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/products')
    expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument()
  })

  it('New product form should not be visible', () => {
    render(<App />)
    expect(screen.queryByText(/New Product/i)).not.toBeInTheDocument()
    cleanup()
  })

  it('New product form should be visible after clicking add product button', () => {
    render(<App />)
    fireEvent.click(screen.getByText(/Create Product/i))
    
    expect(screen.queryByText(/New Product/i)).toBeInTheDocument()
    cleanup()
  })
})
