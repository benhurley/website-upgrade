import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hey, I'm Ben/i);
  expect(linkElement).toBeInTheDocument();
});
