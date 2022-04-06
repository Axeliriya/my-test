import { useState } from 'react';
import styles from './Carousel.module.scss';
import { CarouselProps } from './Carousel.props';

export const Carousel = ({
  countPhoto,
  children,
}: CarouselProps): JSX.Element => {
  const [offset, setOffset] = useState<number>(0);
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);
  const handleLeft = () => {
    const prev = offset + 100;
    setOffset(prev);
  };

  const handleRight = (currentPhoto: number) => {
    setCurrentPhoto(currentPhoto => {
      const newPhoto = currentPhoto + 1;

      return newPhoto;
    });
    if (currentPhoto < countPhoto) {
      const next = offset - 100;
      setOffset(next);
    } else {
      setOffset(0);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleLeft}>prev</button>
      <button onClick={() => handleRight(currentPhoto)}>next</button>
      <div
        className={styles.window}
        style={{
          transform: `translateX(${offset}%)`,
        }}
      >
        <div className={styles.slider}>{children}</div>
      </div>
    </div>
  );
};
