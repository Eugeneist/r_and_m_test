import { useAxiosResponse } from '../../hooks';
import {
  useAxiosResponseProps,
  iCharactersProps,
} from '../../interfaces/interfaces';
import { CharCard } from '../CharCard';
import styles from './CharList.module.scss';

const CharList: React.FC = () => {
  const { state, isLoading, error }: useAxiosResponseProps = useAxiosResponse();

  return (
    <div className={styles.list}>
      {state.map((char: iCharactersProps) => (
        <CharCard
          key={char.id}
          image={char.image}
          name={char.name}
          species={char.species}
        />
      ))}
    </div>
  );
};

export default CharList;
