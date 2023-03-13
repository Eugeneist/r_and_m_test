import { iButton } from '../../interfaces/interfaces';
import styles from './Button.module.scss';

const Button: React.FC<iButton> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
