import { useEffect, useState } from 'react';
import { ProductModel } from '../../interfaces/product.interface';
import { getProducts } from '../../services/api-service';
import styles from './App.module.scss';
// import { AppProps } from './App.props';

export const App = (): JSX.Element => {
  const [products, setProducts] = useState<ProductModel[]>();
  const [fullList, setFullist] = useState<ProductModel[]>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getProducts();
      setFullist(data?.data?.products);

      const productList = getListByPage(page, data?.data?.products);

      setProducts(productList);
    };
    fetch();
  }, []);

  function getListByPage(pageNumber: number, fullList: ProductModel[]) {
    if (pageNumber < 1) return [];

    const itemsPerPage = 10;
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return fullList.slice(start, end);
  }

  const onClickPage = (nextPage: number) => {
    setPage((nextPage += 1));
    fullList && getListByPage(page, fullList);
  };
  return (
    <div className={styles.app}>
      <ul>
        {products?.map(product => (
          <li>{product.name}</li>
        ))}
        <button onClick={() => onClickPage(page)}>more</button>
      </ul>
    </div>
  );
};
