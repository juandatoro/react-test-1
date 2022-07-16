import { render } from '@testing-library/react';
import { WinnersList } from './WinnersList';

describe('WinnersList component', () => {
  const { container } = render(<WinnersList />);

  test('To render main title and submit btn', () => {
    expect(container).toMatchSnapshot();
  });
});
