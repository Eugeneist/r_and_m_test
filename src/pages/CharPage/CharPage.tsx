import { CharMore, Button } from '../../components';
import { Back } from '../../components/Button/Back';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import styles from './CharPage.module.scss';

const CharPage = () => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <div>
        <NavLink className={styles.nav} to={`/`}>
          <Button children={<Back />} />
        </NavLink>
      </div>
      <div className={styles.container__inner}>
        <CharMore id={Number(id)} />
      </div>
    </div>
  );
};

export default CharPage;
