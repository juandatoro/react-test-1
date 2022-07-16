import { render } from '@testing-library/react';
import { WinnersList } from './WinnersList';

describe('WinnersList component', () => {
  const { getByText } = render(
    <WinnersList winners={[{ category: 'category1', movie: 'movie1' }]} />
  );

  test('To render title, categorie and movie', () => {
    expect(getByText(/The winners are/i)).toBeInTheDocument();
    expect(getByText(/category1/i)).toBeInTheDocument();
    expect(getByText(/movie1/i)).toBeInTheDocument();
  });
});
