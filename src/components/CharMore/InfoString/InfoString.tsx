import {
  iInfoStringProps,
  iCharOriginResponse,
} from '../../../interfaces/interfaces';
import styles from './InfoString.module.scss';
import { useCharOrigin } from '../../../hooks';

const InfoString: React.FC<iInfoStringProps> = ({ title, value }) => {
  const { locName }: iCharOriginResponse = useCharOrigin(value);

  if (title === 'Origin') {
    if (value.startsWith('https')) {
      value = String(locName);
    }
  }

  if (value === '' || value === 'unknown') {
    value = 'Unknown';
  }

  return (
    <div className={styles.infostring}>
      <div className={styles.infostring__box}>
        <p className={styles.infostring__title}>{title}</p>
        <p className={styles.infostring__value}>{value}</p>
      </div>
    </div>
  );
};

export default InfoString;
