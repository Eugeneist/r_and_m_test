import styles from './Error.module.scss';

const Error = () => {
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className={styles.errorbox}>
      <h2 className={styles.errorbox__title}>Error!</h2>
      <p className={styles.errorbox__text}>
        Ooops! Something get wrong. Please try again later.
      </p>
      <button className={styles.errorbox__button} onClick={handleRestart}>
        Restart page
      </button>
    </div>
  );
};

export default Error;
