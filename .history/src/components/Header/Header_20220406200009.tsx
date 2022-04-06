import styles from './Header.module.scss';
import { ReactComponent as Burger } from './burger.svg';
import { ReactComponent as Search } from './search.svg';
import { Button } from '..';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to="/">
          Сlothes
        </Link>
      </div>
      <Button>
        <Burger />
      </Button>
    </header>
  );
};
