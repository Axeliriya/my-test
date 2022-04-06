import { Header } from '..';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header>
        <input type="text" />
      </Header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.main}>jskdhf</footer>
    </div>
  );
};
