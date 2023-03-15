import { useState } from 'react';
import styles from './Modal.module.scss';

const Modal: React.FC = () => {
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
        className={isOpen ? styles.modal__box_active : styles.modal__box_closed}
      >
        <div>
          <p>GOOGLE LOGIN IN</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
