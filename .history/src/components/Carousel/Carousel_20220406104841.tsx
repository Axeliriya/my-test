import styles from './Carousel.module.scss';
import { CarouselProps } from './Carousel.props';

export const Carousel = ({ children }: CarouselProps): JSX.Element => {
  return <div className={styles.layout}></div>;
};
