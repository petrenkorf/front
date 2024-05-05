/* eslint-disable */
import { render, screen } from '@testing-library/react'
import NewProductForm from './NewProductForm'

beforeEach(() => {
  render(<NewProductForm />)
})

describe('NewProductForm', () => {
  it('has a title', () => {
    expect(screen.getByText(/New Product/)).toHaveTextContent('New Product')
  })

  it('has a field for product name', () => {
    expect(screen.getByTestId('name-input')).toBeInTheDocument()
  })

  it('has a label for name input', () => {
    expect(screen.getByText('Name')).toBeInTheDocument()
  })

  it('has a field for description', () => {
    expect(screen.getByTestId('description-input')).toBeInTheDocument()
  })

  it('has a label for description input', () => {
    expect(screen.getByText('Description')).toBeInTheDocument()
  })
  
  it('has a field for price', () => {
    expect(screen.getByTestId('price-input')).toBeInTheDocument()
  })

  it('has a label for price input', () => {
    expect(screen.getByText('Price')).toBeInTheDocument()
  })

  it('has a cancel button with value cancel', () => {
    const btn = screen.getByRole('button', {name: /cancel/i}) 

    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent("Cancel")
  })

  it('has a submit button with value Create', () => {
    const btn = screen.getByRole('button', {name: /create/i}) 

    expect(btn).toBeInTheDocument()
    expect(btn.value).toBe("Create")
  })
})
