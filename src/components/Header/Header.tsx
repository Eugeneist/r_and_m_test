import { Modal } from '../Modal';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__nav}>
          <NavLink className={styles.header__nav} to={`/`}>
            <a className={styles.header__navlink} href="/">
              HOME
            </a>
          </NavLink>
        </div>
        <div className={styles.header__login}>
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Header;
