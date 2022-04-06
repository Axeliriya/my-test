import { Button, Header, Input } from '..';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header>
        <Input />
      </Header>
      <main className={styles.main}>
        {children} <Button appearance="primary">Prfdges</Button>
        <Button appearance="green">Prsdfsd</Button>
        <Button appearance="ghost">Prsdfsd</Button>
      </main>
      <footer className={styles.main}>jskdhf</footer>
    </div>
  );
};
