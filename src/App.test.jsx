import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Welcomes the user', () => {
    render(<App></App>)
    const title = screen.getByText(/Welcome/i)

    expect(title).toHaveTextContent('Welcome')
  })
})
