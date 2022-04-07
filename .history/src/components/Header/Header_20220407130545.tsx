import styles from './Header.module.scss';
import { ReactComponent as Burger } from './burger.svg';
import { ReactComponent as Close } from './close.svg';
import { Button } from '..';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Modal } from '../Modal/Modal';

export const Header = (): JSX.Element => {
  const [size, setSize] = useState<number>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleResize = () => {
    const width: number = document.documentElement.clientWidth;
    setSize(width);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  const toggleModal = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <div className={styles.wrapper}>
          <Link className={styles.logo} to="/">
            Сlothes
          </Link>
        </div>
        {size && size <= 767 ? (
          <>
            <Button onClick={toggleModal}>
              {isOpen ? <Close /> : <Burger />}
            </Button>
            {isOpen && (
              <Modal toggleModal={toggleModal} isOpen={isOpen}>
                <nav>
                  <Link className={styles.logo} to="/">
                    Сlothes
                  </Link>
                  <Link
                    className={styles.catalog}
                    to="/products"
                    onClick={toggleModal}
                  >
                    Catalog
                  </Link>
                </nav>
              </Modal>
            )}
          </>
        ) : (
          <nav>
            <Link className={styles.catalog} to="/products">
              Catalog
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
