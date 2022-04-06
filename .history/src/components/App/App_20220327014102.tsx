import styles from './App.module.scss';
import { Main } from '..';
import { TestContextProvider } from '../../context/app.context';
import { AppProps } from './App.props';

export const App = ({ users, error, isLoading }: AppProps): JSX.Element => {
  return (
    <TestContextProvider users={users} error={error} isLoading={isLoading}>
      <div className={styles.app}>
        <Main />
      </div>
    </TestContextProvider>
  );
};
