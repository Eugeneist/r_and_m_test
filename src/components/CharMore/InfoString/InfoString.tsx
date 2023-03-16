import { iInfoStringProps } from '../../../interfaces/interfaces';
import styles from './InfoString.module.scss';

const InfoString: React.FC<iInfoStringProps> = ({ title, value }) => {
  return (
    <div className={styles.infostring}>
      <div className={styles.infostring__box}>
        <p className={styles.infostring__title}>{title || 'Unknown'}</p>
        <p className={styles.infostring__value}>{value || 'Unknown'}</p>
      </div>
    </div>
  );
};

export default InfoString;
