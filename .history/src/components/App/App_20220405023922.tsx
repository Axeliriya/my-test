import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api-service';
import styles from './App.module.scss';
// import { AppProps } from './App.props';

export const App = (): JSX.Element => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetch = async () => {
      const data = await getProducts();
      console.log(data);

      // setProducts(data);
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
