import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bienvenidos a nuestro e-commerce!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bienvenidos a nuestro e-commerce!/i);
  expect(linkElement).toBeInTheDocument();
});