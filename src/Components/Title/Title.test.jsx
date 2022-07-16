import { render } from '@testing-library/react';
import { Title } from './Title';

describe('Title component', () => {
  test('To render title', () => {
    const { getByText } = render(<Title>title</Title>);
    expect(getByText(/title/i)).toBeInTheDocument();
  });

  test('To render title using text prop', () => {
    const { getByText } = render(<Title text='title' />);
    expect(getByText(/title/i)).toBeInTheDocument();
  });
});
