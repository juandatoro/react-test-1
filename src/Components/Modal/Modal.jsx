import { createPortal } from 'react-dom';
import { WinnersList, Button } from 'Components';

export const Modal = ({ closeModal, ...props }) => {
  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'white',
        width: '100vh',
        height: '100vh',
        color: 'black',
      }}
    >
      <Button onClick={closeModal}>Close</Button>

      <WinnersList {...props} />
    </div>,
    document.body
  );
};
