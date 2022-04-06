import { useState } from 'react';
import styles from './Carousel.module.scss';
import { CarouselProps } from './Carousel.props';

export const Carousel = ({ children }: CarouselProps): JSX.Element => {
  const [offset, setOffset] = useState<number>(0);
  const handleLeft = () => {
    console.log('left');
  };

  const handleRight = () => {
    const next = offset - 100;
    setOffset(next);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleLeft}>prev</button>
      <button onClick={handleRight}>next</button>
      <div
        className={styles.window}
        style={{
          transform: `transliteX(${offset}%)`,
        }}
      >
        <div className={styles.slider}>{children}</div>
      </div>
    </div>
  );
};
