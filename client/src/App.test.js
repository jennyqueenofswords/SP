import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter a topic/i);
  expect(inputElement).toBeInTheDocument();
});
