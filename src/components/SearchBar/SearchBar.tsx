import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  addFilteredChars,
  clearFilteredChars,
} from '../../redux/actions/charsActions';
import { persistor } from '../../redux/store/store';
import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(
    localStorage.getItem('searchQuery') || '',
  );

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleInputFocus = () => {
    let input = document.getElementById('searchbar__input');
    input?.focus();
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(addFilteredChars(searchQuery));
    } else if (searchQuery === '') {
      dispatch(addFilteredChars(''));
    } else {
      localStorage.removeItem('searchQuery');
      dispatch(clearFilteredChars());
    }
    localStorage.setItem('searchQuery', searchQuery);
  }, [dispatch, searchQuery]);

  useEffect(() => {
    async function clearPersistedState() {
      await persistor.flush();
    }
    clearPersistedState();
  }, [searchQuery]);

  return (
    <div className={styles.searchbar}>
      <form className={styles.searchbar__form} action="">
        <button
          className={styles.searchbar__button}
          type="button"
          onClick={handleInputFocus}
        >
          {
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                fill="rgba(0, 0, 0, 0.54)"
              />
            </svg>
          }
        </button>
        <input
          className={styles.searchbar__input}
          type="text"
          id="searchbar__input"
          name="searchbar__input"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Filter by name..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
