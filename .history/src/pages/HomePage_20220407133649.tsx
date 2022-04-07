import { useEffect, useState } from 'react';
import { ProductModel } from '../interfaces/product.interface';
import { getProducts } from '../services/api-service';
import { Button, Loader, ProductList } from '../components';

export const HomePage = (): JSX.Element => {
  const [fullList, setFullist] = useState<ProductModel[]>();
  const [topProduct, setTopProduct] = useState<ProductModel[]>();
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
  }, []);

  useEffect(() => {
    const filteredList = fullList?.filter(product => product.on_main_page);

    setTopProduct(filteredList);
  }, [fullList]);

  return (
    <>
      {topProduct && (
        <>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <div className={styles.error}>{error}</div>
          ) : (
            <ProductList products={topProduct} />
          )}
        </>
      )}
    </>
  );
};
