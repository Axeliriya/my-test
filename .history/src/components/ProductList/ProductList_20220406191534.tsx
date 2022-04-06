import { ProductItem } from '..';
import styles from './ProductList.module.scss';
import { ProductsProps } from './ProductList.props';

export const ProductList = ({ products }: ProductsProps): JSX.Element => {
  return (
    <>
      {products && (
        <>
          <Button
            className={styles.available}
            appearance="primary"
            onClick={filteredAvailble}
          >
            available
          </Button>
          <ul className={styles.products}>
            {products &&
              products.map(product => (
                <ProductItem key={product.product_id} product={product} />
              ))}
          </ul>
          <Button
            className={styles.more}
            appearance="green"
            onClick={() => onClickPage(page)}
          >
            {isLoading ? 'Loading...' : 'More'}
          </Button>
        </>
      )}
    </>
  );
};
