import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { ReactComponent as Burger } from './burger.svg';
import { ReactComponent as Search } from './search.svg';

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div>
      {false ? <a className={styles.logo} href="/">
        Сlothes
      </a>
      <Search /> : {children}}
      
      </div>
      <button>
        <Burger />
      </button>
    </header>
  );
};
