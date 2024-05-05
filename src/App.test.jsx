/* eslint-disable */
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('Welcomes the user', () => {
    expect(screen.getByText(/Welcome/i)).toHaveTextContent('Welcome')
  })

  it('Should have a button to create new product', () => {
    expect(screen.getByText(/\Create Product/i)).toBeInTheDocument()
  })

  it('Should display message Loading', () => {
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
  })

  it('New product form should not be visible', () => {
    expect(screen.queryByText(/New Product/i)).not.toBeInTheDocument()
  })

  it('New product form should be visible after clicking add product button', () => {
    fireEvent.click(screen.getByText(/Create Product/i))
    
    expect(screen.queryByText(/New Product/i)).toBeInTheDocument()
  })
})
