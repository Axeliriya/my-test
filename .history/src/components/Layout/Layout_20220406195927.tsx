import { Header, Main } from '..';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

export const Layout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
      <footer className={styles.main}>jskdhf</footer>
    </div>
  );
};
