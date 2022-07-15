import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import { Button } from 'Components';
import close from 'assets/icons/close.svg';
import styles from './Modal.module.scss';

export const Modal = ({ closeModal, children }) => {
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
  children: PropTypes.node.isRequired,
};
