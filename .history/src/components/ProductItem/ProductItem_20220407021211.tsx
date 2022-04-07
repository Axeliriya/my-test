import styles from './ProductItem.module.scss';
import { ProductProps } from './ProductItem.props';
import defaultUrl from './photo.jpg';
import { Button, Carousel } from '..';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const ProductItem = ({
  product,
  ...props
}: ProductProps): JSX.Element => {
  const url = 'https://cdn.artisant.io/api/files/630x819/';
  const [countPhoto, setCountPhoto] = useState<number>(0);
  const [photos, setPhotos] = useState<string[]>();
  const [offset, setOffset] = useState<number>(0);
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);
  const history = createBrowserHistory();

  useEffect(() => {
    if (product.additional_photos && product?.additional_photos?.length) {
      const photoList = product?.additional_photos?.reduce(
        (acc: string[], { compressed }) => (
          compressed !== undefined && !/\.mp4/.test(compressed)
            ? acc.push(compressed)
            : acc,
          acc
        ),
        [],
      );

      setPhotos(photoList);
      setCountPhoto(photoList.length);
    }
  }, []);

  const handleRight = () => {
    if (currentPhoto < countPhoto - 1) {
      setOffset(offset - 100);
      setCurrentPhoto(currentPhoto + 1);
    } else {
      setOffset(0);
      setCurrentPhoto(0);
    }
  };

  return (
    <li className={styles.item} {...props}>
      <div className={styles.wrapper}>
        <Carousel countPhoto={countPhoto}>
          {countPhoto > 0 ? (
            photos?.map((compressed, i) => (
              <img
                className={styles.img}
                key={`compressed${i}`}
                src={url + compressed}
                alt={product.name}
              />
            ))
          ) : (
            <img className={styles.img} src={defaultUrl} alt={product.name} />
          )}
        </Carousel>

        <span className={styles.owner}>
          created by <br /> {product.created_by.display_name}
        </span>
        <Button>arrow</Button>
      </div>

      <div className={styles.decr}>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.quantity}>
          <span>available: </span>
          <span>{product.quantity_available} of 50</span>
        </span>
        <span className={styles.price}>
          <span>Price: </span>
          <span>{product.initial_price} ETH</span>
        </span>
      </div>
      <div className={styles.info}>
        <Link
          className={styles.link}
          to={
            history.location.pathname === '/'
              ? `products/${product.product_id}`
              : `${product.product_id}`
          }
        >
          More info
        </Link>
      </div>
    </li>
  );
};
