import styles from './ProductList.module.scss';

export const ProductList = (): JSX.Element => {
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
