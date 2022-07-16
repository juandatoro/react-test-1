import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import { Button } from 'Components';
import close from 'assets/icons/close.svg';
import styles from './Modal.module.scss';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

export const Modal = ({ closeModal, children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => modalRoot.removeChild(el);
  });

  return createPortal(
    <FocusTrap>
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <Button className={styles.modal__close} onClick={closeModal}>
            <img src={close} alt='close' />
          </Button>
          {children}
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};
