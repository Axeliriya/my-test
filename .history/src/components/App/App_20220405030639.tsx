import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api-service';
import styles from './App.module.scss';
// import { AppProps } from './App.props';

export const App = (): JSX.Element => {
  const [products, setProducts] = useState();

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

      const prodectList = getListByPage(1, data.data.products);

      // setProducts(prodectList);
    };
    fetch();
  }, []);
  return (
    <div className={styles.app}>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};
