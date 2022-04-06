import { Layout } from '..';
import styles from './App.module.scss';

export const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <Layout />
    </div>
  );
};
