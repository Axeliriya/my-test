import { Button } from '..';
import styles from './ProductDetails.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductModel } from '../../interfaces/product.interface';
import { getProductById } from '../../services/api-service';

// interface IProfile {
//   name: string;
//   username: string;
//   email: string;
//   street: string;
//   city: string;
//   zipcode: string;
//   phone: string;
//   website: string;
// }

export const ProductDetails = (): JSX.Element => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setPrduct] = useState<ProductModel>();
  // const [comment, setComment] = useState<{ [x: string]: string }>();
  // const [isRead, setIsRead] = useState<boolean>(true);
  // const [isError, setIsError] = useState<boolean>(false);

  const { productId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProductById(Number(productId));
        console.log(data.data);
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

  return <div>{product?.product_id}</div>;
};
