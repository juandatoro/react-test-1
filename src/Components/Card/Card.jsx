import { Title, Button } from 'Components';

export const Card = ({
  id = '',
  photoUrL = '',
  title = '',
  selected = false,
  handleSelectMovie,
}) => {
  const handleOnClick = () => {
    handleSelectMovie(id, title);
  };

  return (
    <article
      className='card'
      style={{ backgroundColor: selected ? 'white' : 'transparent' }}
    >
      <Title className='card__title'>{title}</Title>
      <img className='card__photo' src={photoUrL} alt={`${title} poster`}></img>
      <Button className='btn--card' onClick={handleOnClick}>
        Select Movie
      </Button>
    </article>
  );
};
