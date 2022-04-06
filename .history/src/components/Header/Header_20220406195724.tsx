/* eslint-disable no-constant-condition */
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { ReactComponent as Burger } from './burger.svg';
import { ReactComponent as Search } from './search.svg';
import { Button } from '..';
import { Link } from 'react-router-dom';

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
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
