import styles from './ProductItem.module.scss';
import { ProductProps } from './ProductItem.props';

export const ProductItem = ({ product, ...props }: ProductProps): JSX.Element => {
  return <li {...props}>{product.name}</li>;
};
