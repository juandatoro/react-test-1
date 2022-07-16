import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('hooks', () => ({
  useFetch: () => ({
    data: [{ hola: 'hola' }],
    loading: false,
    error: false,
  }),
}));

describe('Main view', () => {
  render(<App />);

  test('to render main title and submit btn', () => {
    const title = screen.getByText(/awards 2022/i);
    const submitBtn = screen.getByText(/submit/i);

    expect(title).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
});
