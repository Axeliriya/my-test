import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div>logo</div>
        <button>burg</button>
      </header>
      <main>{children}</main>
    </div>
  );
};
