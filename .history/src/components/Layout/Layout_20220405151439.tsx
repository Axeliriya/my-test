import { Button, Header, Input } from '..';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header>
        <Input placeholder="Search..." />
      </Header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.main}>jskdhf</footer>
    </div>
  );
};
