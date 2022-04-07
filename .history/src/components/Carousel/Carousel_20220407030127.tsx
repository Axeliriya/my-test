import { useState } from 'react';
import { Button } from '..';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';
import { ReactComponent as Arrow } from './arrow.svg';

export const Modal = ({
  countPhoto,
  children,
}: ModalProps): JSX.Element => {
  const [offset, setOffset] = useState<number>(0);
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);

  const handleRight = () => {
    if (currentPhoto < countPhoto - 1) {
      setOffset(offset - 100);
      setCurrentPhoto(currentPhoto + 1);
    } else {
      setOffset(0);
      setCurrentPhoto(0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.window}
        style={{
          transform: `translateX(${offset}%)`,
        }}
      >
        <div className={styles.slider}>{children}</div>
      </div>
      {countPhoto > 1 && (
        <>
          <Button className={styles.btn} onClick={handleRight}>
            <Arrow />
          </Button>
        </>
      )}
    </div>
  );
};