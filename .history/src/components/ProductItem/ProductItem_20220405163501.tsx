import styles from './ProductItem.module.scss';
import { ProductProps } from './ProductItem.props';
import url from './photo.jpg';

export const ProductItem = ({
  product,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <li {...props}>
      <img src={url} alt="" />
      <span>{product.name}</span>
      <span></span>
      <span></span>
    </li>
  );
};
