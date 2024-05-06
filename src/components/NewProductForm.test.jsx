/* eslint-disable */
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import NewProductForm from './NewProductForm'

describe('NewProductForm', () => {
  it('has a title', () => {
    render(<NewProductForm />)
    
    expect(screen.getByText(/New Product/)).toHaveTextContent('New Product')
  })

  it('has a field for product name', () => {
    render(<NewProductForm />)
    
    expect(screen.getByTestId('name-input')).toBeInTheDocument()
  })

  it('has a label for name input', () => {
    render(<NewProductForm />)
    
    expect(screen.getByText('Name')).toBeInTheDocument()
  })

  it('has a field for description', () => {
    render(<NewProductForm />)
    
    expect(screen.getByTestId('description-input')).toBeInTheDocument()
  })

  it('has a label for description input', () => {
    render(<NewProductForm />)
    
    expect(screen.getByText('Description')).toBeInTheDocument()
  })
  
  it('has a field for price', () => {
    render(<NewProductForm />)
    
    expect(screen.getByTestId('price-input')).toBeInTheDocument()
  })

  it('has a label for price input', () => {
    render(<NewProductForm />)
    
    expect(screen.getByText('Price')).toBeInTheDocument()
  })

  it('has a cancel button with value cancel', () => {
    render(<NewProductForm />)
    
    const btn = screen.getByRole('button', {name: /cancel/i}) 

    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent("Cancel")
  })

  it('has a submit button with value Create', () => {
    render(<NewProductForm />)
    
    const btn = screen.getByRole('button', {name: /create/i}) 

    expect(btn).toBeInTheDocument()
    expect(btn.value).toBe("Create")
  })

  it('executes onCancel when pressing cancel button', () => {
    const onCancel = vi.fn().mockImplementation()

    render(<NewProductForm onCancel={onCancel}/>)

    fireEvent.click(screen.getByText(/Cancel/i)) 

    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  it('executes onClose when clicking outside the component', () => {
    const onClickOutside = vi.fn().mockImplementation()

    render(
      <>
        <NewProductForm onClickOutside={onClickOutside}/>
        <button data-testid="outside">Outside</button>
      </>
    )

    fireEvent.click(screen.getByText(/Outside/i)) 

    expect(onClickOutside).toHaveBeenCalledTimes(1)
  })
})
