import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Layout = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div>logo</div>
      {children}
      <button>burg</button>
    </header>
  );
};
