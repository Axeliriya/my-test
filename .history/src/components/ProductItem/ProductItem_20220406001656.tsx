import styles from './ProductItem.module.scss';
import { ProductProps } from './ProductItem.props';
import url from './photo.jpg';

export const ProductItem = ({
  product,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <li {...props}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={url} alt={product.name} />
        <span>{product.created_by.display_name}</span>
      </div>

      <div className={styles.decr}>
        <span>{product.name}</span>
        <span>{product.quantity_available}</span>
        <span>{product.initial_price}</span>
      </div>
    </li>
  );
};
