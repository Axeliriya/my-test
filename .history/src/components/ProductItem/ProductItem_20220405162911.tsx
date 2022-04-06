import styles from './ProductItem.module.scss';
import { ProductProps } from './ProductItem.props';

export const ProductItem = ({
  product,
  ...props
}: ProductProps): JSX.Element => {
  const imgUrl = `https://artisant.io/_next/image?url=https%3A%2F%2Fcdn.artisant.io%2Fapi%2Ffiles%2F305x305%2F${product.avatar.compressed}&w=640&q=75`;
  return (
    <li {...props}>
      <img src=`https://artisant.io/_next/image?url=https%3A%2F%2Fcdn.artisant.io%2Fapi%2Ffiles%2F305x305%2F${product.avatar.compressed}&w=640&q=75` alt="" />
      <span>{product.name}</span>
      <span></span>
      <span></span>
    </li>
  );
};
