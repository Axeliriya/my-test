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
        {children} <Button appearance="primary">Pr</Button>
        <Button appearance="green">Pr</Button>
        <Button appearance="ghost">Pr</Button>
      </main>
      <footer className={styles.main}>jskdhf</footer>
    </div>
  );
};
