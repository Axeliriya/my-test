import { useEffect, useState } from 'react';
import { ProductModel } from '../../interfaces/product.interface';
import { getProducts } from '../../services/api-service';
import styles from './App.module.scss';
// import { AppProps } from './App.props';

export const App = (): JSX.Element => {
  const [products, setProducts] = useState<ProductModel[]>();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getProducts();
      console.log(data.data.products);

      function getListByPage(pageNumber: number, fullList: []) {
        if (pageNumber < 1) return [];

        const itemsPerPage = 10;
        const start = (pageNumber - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return fullList.slice(start, end);
      }

      const productList = getListByPage(1, data.data.products);

      console.log(productList);

      setProducts(productList);
    };
    fetch();
  }, []);
  return (
    <div className={styles.app}>
      <ul>
        {products?.map(product => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
