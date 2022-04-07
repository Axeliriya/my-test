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
      <Card color="white">
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
            </div>
            <div>{product?.name}</div>
            <div>{product?.initial_price} ETH</div>
            <div>
              <div>{product?.created_by?.display_name}</div>
              <div>{product?.created_by?.instagram}</div>
              <div>{product?.created_by?.telegram}</div>
              <div>{product?.created_by?.bio}</div>
            </div>
            <div>{product?.created_at}</div>
            <div>{product?.quantity_available}</div>
            <div>{product?.product_id}</div>
            <div>{product?.description}</div>
          </>
        )}
      </Card>
    </div>
  );
};
