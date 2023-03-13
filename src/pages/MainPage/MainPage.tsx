import { CharList, SearchBar, Loader, Error } from '../../components';
import { useAxiosResponse } from '../../hooks';
import { useAxiosResponseProps } from '../../interfaces/interfaces';
import styles from './MainPage.module.scss';
import logo from '../../assets/logo.jpg';

const MainPage = () => {
  const { isLoading, error }: useAxiosResponseProps = useAxiosResponse();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <div className={styles.logobox}>
          <img
            className={styles.logobox__logo}
            src={logo}
            alt="rick and morty logo"
          />
        </div>
        <SearchBar />
        <CharList />
      </div>
    </div>
  );
};

export default MainPage;
