import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';

const selectHandler = jest.fn();

describe('Card component', () => {
  const renderCard = ({ id, photoUrL, title, handleSelectMovie, selected }) =>
    render(
      <Card
        id={id}
        photoUrL={photoUrL}
        title={title}
        handleSelectMovie={handleSelectMovie}
        selected={selected}
      />
    );

  test('To render title, image and select button', () => {
    renderCard({
      id: '1',
      photoUrL: 'photo-url',
      title: 'title',
      handleSelectMovie: selectHandler,
    });

    const title = screen.getByText(/title/i);
    const img = screen.getByRole('img');
    const btn = screen.getByRole('button');

    expect(title).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'photo-url');
    expect(img).toHaveAttribute('alt', 'title poster');
  });

  test('To select the movie on button click', async () => {
    renderCard({
      id: '1',
      photoUrL: 'photo-url',
      title: 'title',
      handleSelectMovie: selectHandler,
    });
    const btn = screen.getByRole('button');
    await userEvent.click(btn);

    expect(selectHandler).toHaveBeenCalled();
  });

  test('To show "Deselect movie" when the movie is selected', async () => {
    renderCard({
      id: '1',
      photoUrL: 'photo-url',
      title: 'title',
      handleSelectMovie: selectHandler,
      selected: true,
    });
    const btn = screen.getByText(/deselect movie/i);

    expect(btn).toBeInTheDocument;
  });
});
