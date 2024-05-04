import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App></App>)
    const title = screen.getByText(/Welcome/i)

    expect(title).toHaveTextContent('Welcome')
  })
})