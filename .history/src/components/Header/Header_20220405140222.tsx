/* eslint-disable no-constant-condition */
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { ReactComponent as Burger } from './burger.svg';
import { ReactComponent as Search } from './search.svg';
import { Button } from '..';

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div>
        {true ? (
          <>
            <a className={styles.logo} href="/">
              Сlothes
            </a>
            <Button appearance="ghost">
              <Search />
            </Button>
          </>
        ) : (
          { children }
        )}
      </div>
      <Button appearance="ghost">
        <Burger />
      </Button>
    </header>
  );
};
