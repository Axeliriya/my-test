import styles from './ProductItem.module.scss';
import { ProductProps } from './ProductItem.props';

export const ProductItem = ({
  product,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <li {...props}>
      <img src="" alt="" />
      <span></span>
      <span></span>
      <span></span>
    </li>
  );
};
