import { NavLink } from 'react-router-dom';
import { iCharCardProps } from '../../interfaces/interfaces';
import styles from './CharCard.module.scss';

const CharCard: React.FC<iCharCardProps> = ({ id, image, name, species }) => {
  return (
    <NavLink className={styles.nav} to={`/character/${id}`}>
      <div className={styles.card}>
        <div className={styles.card__imagebox}>
          <img className={styles.card__image} src={image} alt="char name" />
        </div>
        <div className={styles.card__infobox}>
          <h3 className={styles.card__title}>
            {name.split(' ').slice(0, 2).join(' ')}
          </h3>
          <p className={styles.card__text}>{species}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default CharCard;
