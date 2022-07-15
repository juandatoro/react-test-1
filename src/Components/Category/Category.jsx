import { useState, forwardRef, useImperativeHandle } from 'react';
import { Title, Card } from 'Components';
import styles from './Category.module.scss';

export const Category = forwardRef(
  ({ id = '', title = '', items = [] }, ref) => {
    const emptySelection = { id: '', title: '' };
    const [selectedMovie, setSelectedMovie] = useState({ ...emptySelection });

    useImperativeHandle(ref, () => ({
      id,
      title,
      getSelected: () => selectedMovie,
      clearSelected: () => setSelectedMovie({ ...emptySelection }),
    }));

    return (
      <section id={id} className={styles.category}>
        <Title className={styles.category__title} type='h2'>
          {title}
        </Title>
        {items.length &&
          items.map(({ id, title, photoUrL }) => (
            <Card
              key={id}
              id={id}
              title={title}
              photoUrL={photoUrL}
              selected={id === selectedMovie.id}
              handleSelectMovie={(id, title) => {
                window.history.pushState(
                  '',
                  document.title,
                  window.location.pathname + window.location.search
                );
                selectedMovie.id === id
                  ? setSelectedMovie({ ...emptySelection })
                  : setSelectedMovie({ id, title });
              }}
            />
          ))}
      </section>
    );
  }
);
