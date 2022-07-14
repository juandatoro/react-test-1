import { render, screen } from '@testing-library/react';
import App from './App';

describe('Main view', () => {
  render(<App />);

  test('to render main title', () => {
    const title = screen.getByText(/awards 2022/i);
    expect(title).toBeInTheDocument();
  });
});
