import { useState } from 'react';
import { Button } from '..';
import styles from './Carousel.module.scss';
import { CarouselProps } from './Carousel.props';

export const Carousel = ({
  countPhoto,
  children,
}: CarouselProps): JSX.Element => {
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
    </div>
  );
};

// {
//   countPhoto > 1 ? (
//     <Button className={styles.btn} onClick={handleRight}>
//       <div className={styles.slider}>{children}</div>
//     </Button>
//   ) : (
//     <div className={styles.slider}>{children}</div>
//   );
// }
