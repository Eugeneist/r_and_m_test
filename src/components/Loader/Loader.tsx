import loaderImage from '../../assets/loader.png';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img className={styles.loader__image} src={loaderImage} alt="loader" />
    </div>
  );
};

export default Loader;
