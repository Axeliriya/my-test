import styles from './Loader.module.scss';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={styles.spinner}>
      <RotatingLines width="40" />
    </div>
  );
};
