import { useRef, useState } from 'react';
import { useFetch } from 'hooks';
import { Title, Category, Button, Modal } from 'Components';

function App() {
  const { data } = useFetch('/api/getBallotData');
  const [winners, setWinners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(!!winners.length);
  const categoriesRefs = useRef([]);
  const items = data?.items ?? [];

  const handleOnClick = () => {
    const selectedMovies = [];

    for (const { id, title, getSelected } of categoriesRefs.current) {
      const selectedMovie = getSelected();
      if (!selectedMovie.id) {
        console.log('must select a movie for', id);
        window.location.hash = `#${id}`;
        break;
      } else {
        selectedMovies.push({ category: title, movie: selectedMovie.title });
      }
    }

    if (selectedMovies.length === items.length) {
      setWinners(selectedMovies);
      setIsModalOpen(true);
    }
  };

  console.log(winners);

  return (
    <>
      <Title>awards 2022</Title>
      {items.length &&
        items.map(({ id, items, title }, idx) => (
          <Category
            ref={(el) => (categoriesRefs.current[idx] = el)}
            key={id}
            id={id}
            title={title}
            items={items}
          />
        ))}

      {isModalOpen ? (
        <Modal closeModal={() => setIsModalOpen(false)} winners={winners} />
      ) : (
        <Button
          onClick={handleOnClick}
          style={{ position: 'fixed', top: '2rem', left: '2rem' }}
        >
          Submit
        </Button>
      )}
    </>
  );
}

export default App;
