import { useAxiosResponse } from '../../hooks';
import {
  useAxiosResponseProps,
  iCharactersProps,
} from '../../interfaces/interfaces';
import { CharCard } from '../CharCard';
import styles from './CharList.module.scss';

const CharList: React.FC = () => {
  const { state }: useAxiosResponseProps = useAxiosResponse();

  state.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div className={styles.list}>
      {state.map((char: iCharactersProps) => (
        <CharCard
          key={char.id}
          id={char.id}
          image={char.image}
          name={char.name}
          species={char.species}
        />
      ))}
    </div>
  );
};

export default CharList;
