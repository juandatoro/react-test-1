import PropTypes from 'prop-types';
import { Title } from 'Components';
import styles from './WinnersList.module.scss';

export const WinnersList = ({ winners = [] }) => {
  return (
    <div className={styles.winners}>
      <Title className={styles.winners__title}>THe winners are</Title>
      {winners.map(({ category, movie }) => (
        <div className={styles.winners__movies} key={category}>
          <p className={styles['winners__text--category']}>{category}</p>
          <p className={styles['winners__text--movie']}>{movie}</p>
        </div>
      ))}
    </div>
  );
};

WinnersList.propTypes = {
  winners: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      movie: PropTypes.string.isRequired,
    })
  ).isRequired,
};
