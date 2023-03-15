import { useAxiosResponse } from '../../hooks';
import {
  useAxiosResponseProps,
  iCharactersProps,
} from '../../interfaces/interfaces';
import { CharCard } from '../CharCard';
import styles from './CharList.module.scss';

const CharList: React.FC = () => {
  let searchFiltered = JSON.parse(
    localStorage.getItem('searchFiltered') || '[]',
  );
  const { state }: useAxiosResponseProps = useAxiosResponse();

  let resp;

  if (searchFiltered.length > 0) {
    resp = searchFiltered;
  } else {
    resp = state;
  }

  resp.sort((a: { name: string }, b: { name: string }) =>
    a.name > b.name ? 1 : -1,
  );

  return (
    <div className={styles.list}>
      {resp.map((char: iCharactersProps) => (
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
