import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  test('To render the button displaying children element', () => {
    render(<Button>children</Button>);
    const button = screen.getByText(/children/i);

    expect(button).toBeInTheDocument();
  });

  test('To apply the submit styles when type=submit', () => {
    render(<Button type='submit'>children</Button>);
    const button = screen.getByText(/children/i);

    expect(button).toHaveClass('btn--submit');
  });
});
