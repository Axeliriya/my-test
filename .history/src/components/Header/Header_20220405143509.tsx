/* eslint-disable no-constant-condition */
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { ReactComponent as Burger } from './burger.svg';
import { ReactComponent as Search } from './search.svg';
import { Button } from '..';

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.wrapper}>
        {false ? (
          <>
            <a className={styles.logo} href="/">
              Сlothes
            </a>
            <Button>
              <Search />
            </Button>
          </>
        ) : (
          <div>{children}</div>
        )}
      </div>

      <Button>
        <Burger />
      </Button>
    </header>
  );
};
