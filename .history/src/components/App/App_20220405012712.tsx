import styles from './App.module.scss';
import { AppProps } from './App.props';

export const App = ({ users, error, isLoading }: AppProps): JSX.Element => {
  return <div className={styles.app} />;
};
