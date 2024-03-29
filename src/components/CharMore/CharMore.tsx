import {
  iCharMoreProps,
  iSingleCharResponse,
} from '../../interfaces/interfaces';
import { InfoString } from './InfoString';
import { useSingleCharResponse } from '../../hooks';
import styles from './CharMore.module.scss';

const CharMore: React.FC<iCharMoreProps> = ({ id }) => {
  const { charInfo }: iSingleCharResponse = useSingleCharResponse(id);

  return (
    <div className={styles.charmore}>
      <img
        className={styles.charmore__image}
        src={charInfo?.image}
        alt="portrait"
      />
      <h2 className={styles.charmore__name}>{charInfo?.name}</h2>
      <div className={styles.charmore__infobox}>
        <h5 className={styles.charmore__infotitle}>Informations</h5>
      </div>
      <InfoString title={'Gender'} value={String(charInfo.gender)} />
      <InfoString title={'Status'} value={String(charInfo.status)} />
      <InfoString title={'Specie'} value={String(charInfo.species)} />
      <InfoString title={'Origin'} value={String(charInfo.origin?.name)} />
      <InfoString title={'Type'} value={String(charInfo.type)} />
    </div>
  );
};

export default CharMore;
