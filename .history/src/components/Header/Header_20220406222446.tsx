import styles from './Header.module.scss';
import { ReactComponent as Burger } from './burger.svg';
import { Button } from '..';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = (): JSX.Element => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

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
