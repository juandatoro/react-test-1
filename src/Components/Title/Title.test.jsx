import { render } from '@testing-library/react';
import { Title } from './Title';

describe('Title component', () => {
  const { container } = render(<Title />);

  test('To render main title and submit btn', () => {
    expect(container).toMatchSnapshot();
  });
});
