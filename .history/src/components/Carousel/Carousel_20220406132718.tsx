import { useState } from 'react';
import styles from './Carousel.module.scss';
import { CarouselProps } from './Carousel.props';

export const Carousel = ({
  countPhoto,
  children,
}: CarouselProps): JSX.Element => {
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

    console.log('right');
  };

  return (
    <div className={styles.container}>
      <button onClick={handleRight}>next</button>
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
