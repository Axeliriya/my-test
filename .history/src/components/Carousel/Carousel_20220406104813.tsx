import { Header, Input, Main } from '..';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <div className={styles.layout}></div>;
};
