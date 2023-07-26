import { render, screen } from '@testing-library/react';
import TopicInputForm from './TopicInputForm';

test('renders the form', () => {
  render(<TopicInputForm onGenerate={() => {}} />);

  const inputElement = screen.getByPlaceholderText(/enter a topic/i);
  const buttonElement = screen.getByText(/submit/i);

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
