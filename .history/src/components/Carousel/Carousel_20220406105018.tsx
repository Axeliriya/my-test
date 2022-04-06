import styles from './Carousel.module.scss';
import { CarouselProps } from './Carousel.props';

export const Carousel = ({ children }: CarouselProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div className={styles.slider}>{children}</div>
      </div>
    </div>
  );
};
