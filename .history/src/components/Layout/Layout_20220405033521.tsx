import styles from './Layout.module.scss';
// import { AppProps } from './Layout.props';

export const Layout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}></header>
    </div>
  );
};
