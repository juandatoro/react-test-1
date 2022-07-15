import { useState, forwardRef, useImperativeHandle } from 'react';
import { Title, Card } from 'Components';

export const Category = forwardRef(
  ({ id = '', title = '', items = [] }, ref) => {
    const [selectedMovie, setSelectedMovie] = useState({ id: '', title: '' });

    useImperativeHandle(ref, () => ({
      id,
      title,
      getSelected: () => selectedMovie,
    }));

    return (
      <section
        id={id}
        className='category'
        style={{ display: 'flex', marginBottom: '4rem' }}
      >
        <Title className='category__title'>{title}</Title>
        {items.length &&
          items.map(({ id, title, photoUrL }) => (
            <Card
              key={id}
              id={id}
              title={title}
              photoUrL={photoUrL}
              selected={id === selectedMovie.id}
              handleSelectMovie={(id, title) => setSelectedMovie({ id, title })}
            />
          ))}
      </section>
    );
  }
);
