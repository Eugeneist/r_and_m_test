import { useState } from 'react';
import { iModal } from '../../interfaces/interfaces';
import styles from './Modal.module.scss';

const Modal: React.FC<iModal> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.modal__button} onClick={handleOpen}>
        LOGIN
      </button>
      <div
        onClick={handleOpen}
        className={
          isOpen ? styles.modal__window_active : styles.modal__window_closed
        }
      >
        <div
          className={
            isOpen ? styles.modal__box_active : styles.modal__box_closed
          }
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
