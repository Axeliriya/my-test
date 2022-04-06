import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Layout = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <Link>Сlothes</Link>
      {children}
      <button>burg</button>
    </header>
  );
};
