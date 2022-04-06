import { Footer, Header, Main } from '..';
import styles from './Layout.module.scss';

export const Layout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
