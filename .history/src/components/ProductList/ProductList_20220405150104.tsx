import styles from './ProductList.module.scss';

export const ProductList = ({ products }): JSX.Element => {
  return (
    //      {isLoading ? (
    //        <Loader />
    //      ) : !error ? (
    <ul className={styles.users}>
      {products &&
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
    </ul>
    //      ) : (
    //        <div>{error}</div>
    //      )}
  );
};
