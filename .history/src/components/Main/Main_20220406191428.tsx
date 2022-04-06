import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Button, ProductList } from '..';
import { ProductModel } from '../../interfaces/product.interface';
import { routes } from '../../routes';
import { getProducts } from '../../services/api-service';
import styles from './Main.module.scss';

const ErrorPage = lazy(() =>
  import('../../pages/ErrorPage' /*webpackChunkName: "404-page" */).then(
    ({ ErrorPage }) => ({
      default: ErrorPage,
    }),
  ),
);

export const Main = (): JSX.Element => {
  const [products, setProducts] = useState<ProductModel[]>();
  const [fullList, setFullist] = useState<ProductModel[]>();
  const [filtered, setFiltered] = useState<ProductModel[]>();
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProducts();
        const products = data?.data?.products;
        setFullist(products);
        const productList = getListByPage(page, products);
        setProducts(productList);
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

  useEffect(() => {
    if (isFiltered) {
      const list = filtered && getListByPage(page, filtered);
      setProducts(list);
    } else {
      const list = fullList && getListByPage(page, fullList);
      setProducts(list);
    }
  }, [isFiltered]);

  function getListByPage(pageNumber: number, fullList: ProductModel[]) {
    if (pageNumber < 1) return [];

    const itemsPerPage = 10;
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return fullList.slice(0, end);
  }

  const onClickPage = (nextPage: number) => {
    setPage((nextPage += 1));
    if (isFiltered) {
      filtered && getListByPage(page, filtered);
    } else {
      fullList && getListByPage(page, fullList);
    }
  };

  const filteredAvailble = () => {
    setIsFiltered(!isFiltered);
    const filteredList = fullList?.filter(
      product => product.quantity_available > 0,
    );
    setFiltered(filteredList);
  };

  return (
    <main className={styles.main}>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </main>
  );
};
