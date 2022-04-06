import styles from './Carousel.module.scss';
import { CarouselProps } from './Carousel.props';

export const Carousel = ({ children }: CarouselProps): JSX.Element => {
  const handleLeft = () => {
    console.log('left');
  };

  const handleRight = () => {
    console.log('right');
  };

  return (
    <div className={styles.container}>
      <button onClick={handleLeft}>prev</button>
      <button onClick={handleRight}>next</button>
      <div className={styles.window}>
        <div className={styles.slider}>{children}</div>
      </div>
    </div>
  );
};
