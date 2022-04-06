import { Button } from '..';
import styles from './ProductDetails.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductModel } from '../../interfaces/product.interface';
import { getProductById } from '../../services/api-service';
import defaultUrl from './photo.jpg';

export const ProductDetails = (): JSX.Element => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setPrduct] = useState<ProductModel>();
  const url = 'https://cdn.artisant.io/api/files/630x819/';
  const [countPhoto, setCountPhoto] = useState<number>(0);
  const [photos, setPhotos] = useState<string[]>();

  const { productId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProductById(Number(productId));
        setPrduct(data.data.product);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
          throw new Error(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [productId]);

  useEffect(() => {
    if (product?.additional_photos && product?.additional_photos?.length) {
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
  }, [photos]);

  return (
    <div className={styles.info}>
      {product && (
        <>
          <div>
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
          </div>
          <div>{product?.name}</div>
          <div>{product?.product_id}</div>
          <div>{product?.description}</div>
        </>
      )}
    </div>
  );
};
