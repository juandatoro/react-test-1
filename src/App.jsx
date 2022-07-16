import { useRef, useState } from 'react';
import { useFetch } from 'hooks';
import { Title, Category, Button, Modal, WinnersList } from 'Components';
import styles from './App.module.scss';

function App() {
  const { data } = useFetch('/api/getBallotData');
  const [winners, setWinners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(!!winners.length);
  const categoriesRefs = useRef([]);
  const items = data?.items ?? [];

  console.log(data);

  const handleOnSubmit = () => {
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

  const handleCloseModal = () => {
    for (const { clearSelected } of categoriesRefs.current) {
      clearSelected();
    }
    setIsModalOpen(false);
  };

  return (
    <div className={styles.layout}>
      <Title>awards 2022</Title>
      {items.length > 0 &&
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
        <Modal closeModal={handleCloseModal} winners={winners}>
          <WinnersList winners={winners} />
        </Modal>
      ) : (
        <Button type='submit' onClick={handleOnSubmit} className='fixed'>
          Submit
        </Button>
      )}
    </div>
  );
}

export default App;
