import styles from './NotFound.module.scss';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <div className={styles.errorbox}>
          <h2 className={styles.errorbox__title}>Error 404, Not Found</h2>
          <p className={styles.errorbox__text}>
            Ooops! That page couldn`t be found!
          </p>
          <NavLink className={styles.nav} to={`/`}>
            <button className={styles.errorbox__button}>Go To Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
