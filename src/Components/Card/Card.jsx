import cn from 'classnames';
import PropTypes from 'prop-types';
import { Title, Button } from 'Components';
import styles from './Card.module.scss';

export const Card = ({
  id,
  photoUrL,
  title,
  selected = false,
  handleSelectMovie,
}) => {
  const handleOnClick = () => handleSelectMovie(id, title);

  return (
    <article
      className={cn(styles.card, { [styles['card--selected']]: selected })}
    >
      <Title type='h3' className={styles.card__title}>
        {title}
      </Title>
      <img
        className={styles.card__photo}
        src={photoUrL}
        alt={`${title} poster`}
      ></img>
      <Button onClick={handleOnClick}>
        {selected ? 'Deselect movie' : 'Select Movie'}
      </Button>
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  photoUrL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  handleSelectMovie: PropTypes.func.isRequired,
};
