import styles from './Header.module.scss';
import { ReactComponent as Burger } from './burger.svg';
import { Button } from '..';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Header = (): JSX.Element => {
  const [size, setSize] = useState<number>();

  const handleResize = () => {
    const width: number = document.documentElement.clientWidth;
    console.log(width);
    setSize(width);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to="/">
          Сlothes
        </Link>
      </div>
      {size && size <= 767 ? (
        <Button>
          <Burger />
        </Button>
      ) : (
        <nav>
          <Link className={styles.logo} to="/products">
            Catalog
          </Link>
        </nav>
      )}
    </header>
  );
};
