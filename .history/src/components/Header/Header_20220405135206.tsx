import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { ReactComponent as Burger } from './burger.svg';

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <a className={styles.logo} href="/">
        Сlothes
      </a>
      {children}
      <button>
        <Burger />
      </button>
    </header>
  );
};
