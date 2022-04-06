import styles from './ProductItem.module.scss';
import { ProductProps } from './ProductItem.props';
import defaultUrl from './photo.jpg';

export const ProductItem = ({
  product,
  ...props
}: ProductProps): JSX.Element => {
  const url = 'https://cdn.artisant.io/api/files/630x819/';
  return (
    <li {...props}>
      <div className={styles.wrapper}>
        {product.additional_photos > 0 ? (
          product.additional_photos?.map(({ compressed }) => (
            <img
              className={styles.img}
              key={compressed}
              src={url + compressed}
              alt={product.name}
            />
          ))
        ) : (
          <img className={styles.img} src={defaultUrl} alt={product.name} />
        )}

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

// https://cdn.artisant.io/api/files/630x819/97_3e6aedc8-6aa0-4692-86e3-e04dfb68412c.webp
// https://cdn.artisant.io/api/files/630x819/295_1a54a6e3-a67d-49e5-a665-d510b20463f6.webp
// https://cdn.artisant.io/api/files/630x819/97_15ad271b-ff54-4c78-b22e-9e7cccc91174.webp
// https://cdn.artisant.io/api/files/630x819/97_c6539384-2ddf-4d9c-8be9-3c4a6a075ff2.webp
