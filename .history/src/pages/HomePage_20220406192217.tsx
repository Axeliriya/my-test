import { useEffect, useState } from 'react';
import { getProducts } from '../services/api-service';

export const HomePage = (): JSX.Element => {
  const [filtered, setFiltered] = useState<ProductModel[]>();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProducts();
        const products = data?.data?.products;
        setFullist(products);
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
  }, [page]);
  return (
    <>
      <div>home</div>
    </>
  );
};
