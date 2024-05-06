/* eslint-disable */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('executes onClickOutside when clicking outside form', async () => {
    const callback = vi.fn().mockImplementation()

    render(
      <div>
        <NewProductForm onClickOutside={callback} />
        <button>Outside</button>
      </div>
    )
  
    waitFor(() => {
      fireEvent.click(screen.getByText('Outside'))
      expect(callback).toHaveBeenCalled()
    })
  })

  it('Submits form data when clicking Create button', async () => {
    vi.mock('fetch')

    const mockedImplementation = () => Promise.resolve({
      json() {
        return { products: [] }
      }
    })

    global.fetch = vi.fn(mockedImplementation)

    userEvent.setup()
    render(<NewProductForm />)
    const nameInput = screen.getByTestId('name-input')

    const descInput = screen.getByTestId('description-input')
    const priceInput = screen.getByTestId('price-input')

    await userEvent.type(nameInput, "Produto")
    await userEvent.type(descInput, "Description")
    await userEvent.type(priceInput, "1234")
  })
})
