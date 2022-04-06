import { Button } from '..';
import styles from './ProductDetails.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductModel } from '../../interfaces/product.interface';
import { getProductById } from '../../services/api-service';
import { parse } from 'node-html-parser';

export const ProductDetails = (): JSX.Element => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setPrduct] = useState<ProductModel>();

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
    product && console.log(parse(product?.description));
  }, [productId]);

  return (
    <div className={styles.info}>
      {product && (
        <>
          <div>{product?.product_id}</div>
          <div></div>
        </>
      )}
    </div>
  );
};
