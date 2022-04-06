import { UsersItem, Loader } from '..';
import styles from './UsersList.module.scss';
import { useContext } from 'react';
import { TestContext } from '../../context/app.context';

export const UsersList = (): JSX.Element => {
  const { users, isLoading, error } = useContext(TestContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : !error ? (
        <ul className={styles.users}>
          {users && users.map(user => <UsersItem key={user.id} user={user} />)}
        </ul>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};
