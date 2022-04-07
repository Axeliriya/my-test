import styles from './ProductDetails.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/api-service';
import defaultUrl from './photo.jpg';
import { Product } from '../../interfaces/info.interface';
import { Carousel, Card } from '..';

export const ProductDetails = (): JSX.Element => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setPrduct] = useState<Product>();
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
  }, [product]);

  return (
    <div className={styles.info}>
      <Card className={styles.card}>
        {product && (
          <>
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
                  <img
                    className={styles.img}
                    src={defaultUrl}
                    alt={product.name}
                  />
                )}
              </Carousel>
              <div className={styles.name}>{product?.name}</div>
            </div>

            <div className={styles.bio}>
              <div className={styles.display_name}>
                <span className={styles.subtitle}>Owner:</span>{' '}
                {product?.created_by?.display_name}
              </div>
              <div className={styles.contacts}>
                @{product?.created_by?.instagram}
              </div>
              <div className={styles.about}>
                <span className={styles.subtitle}>About owner:</span>
                <div>{product?.created_by?.bio}</div>
              </div>
            </div>
            <div className={styles.price}>
              <span className={styles.subtitle}>Price: </span>
              {product?.initial_price} ETH
            </div>
            <div className={styles.available}>
              <span className={styles.subtitle}>Available: </span>
              {product?.quantity_available} of 50
            </div>
            <div className={styles.descr}>
              <span className={styles.subtitle}>Description:</span>
              <div>{product?.description}</div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
