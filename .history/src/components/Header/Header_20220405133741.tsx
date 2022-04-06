import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { HeaderProps } from './burger.svg';

export const Layout = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <a href="/">Сlothes</a>
      {children}
      <button></button>
    </header>
  );
};
