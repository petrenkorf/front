/* eslint-disable */
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('Welcomes the user', () => {
    expect(screen.getByText(/Welcome/i)).toHaveTextContent('Welcome')
  })

  it('Should have a button to create new product', () => {
    expect(screen.getByText(/\+/i)).toBeInTheDocument()
  })

  it('Should display message Loading', () => {
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
  })
})
