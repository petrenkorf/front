import { render, screen } from '@testing-library/react';
import Product from './Product';

const props = {
  name: 'Produto',
  description: 'description',
  price: 1600
}

beforeEach(() => {
  render(<Product {...props} />);
})

test('render product title', () => {
  const title = screen.getByText(/Produto/i);

  expect(title).toBeInTheDocument();
});

test('render product description', () => {
  const description = screen.getByText(/description/i);

  expect(description).toBeInTheDocument();
});

test('render product price', () => {
  const price = screen.getByText(/R\$ 16,00/);

  expect(price).toBeInTheDocument();
})

