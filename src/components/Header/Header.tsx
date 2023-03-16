import { Modal } from '../Modal';
import { Login } from '../Login';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store/store';
import { logout } from '../../redux/actions/charsActions';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.loginReducers.user);
  const login = useSelector(
    (state: RootState) => state.loginReducers.isLoggedIn,
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__nav}>
          <NavLink className={styles.header__nav} to={`/`}>
            <a className={styles.header__navlink} href="/">
              HOME
            </a>
          </NavLink>
        </div>
        <div className={styles.header__login}>
          {login ? (
            <div className={styles.header__loginbox}>
              <div className={styles.header__profile}>
                <img
                  className={styles.header__avatar}
                  src={user.picture}
                  alt="avatar"
                />
                <p className={styles.header__name}>{user.name}</p>
              </div>
              <button
                className={styles.header__loginbtn}
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <Modal>
              <Login />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
