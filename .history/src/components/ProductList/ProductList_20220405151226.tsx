import { ProductItem } from '..';
import styles from './ProductList.module.scss';
import { ProductsProps } from './ProductList.props';

export const ProductList = ({ products }: ProductsProps): JSX.Element => {
  return (
    //      {isLoading ? (
    //        <Loader />
    //      ) : !error ? (
    <ul className={styles.users}>
      {products &&
        products.map(product => (
          <ProductItem key={product.product_id} product={product} />
        ))}
    </ul>
    //      ) : (
    //        <div>{error}</div>
    //      )}
  );
};
