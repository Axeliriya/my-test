import styles from './Header.module.scss';
import { ReactComponent as Burger } from './burger.svg';
import { Button } from '..';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Header = (): JSX.Element => {
  const [size, setSize] = useState<number>();

  const handleResize = () => {
    const width: number = document.documentElement.clientWidth;
    setSize(width);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    console.log(size);

    return () => window.removeEventListener('resize', handleResize);
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
