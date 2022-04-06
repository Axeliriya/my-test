import { ProductItem } from '..';
import styles from './ProductList.module.scss';
import { ProductsProps } from './ProductList.props';

export const ProductList = ({ products }: ProductsProps): JSX.Element => {
  return (
    <ul className={styles.products}>
      {products &&
        products.map(product => (
          <ProductItem key={product.product_id} product={product} />
        ))}
    </ul>
  );
};
