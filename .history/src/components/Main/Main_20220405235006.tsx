import { useEffect, useState } from 'react';
import { Button, ProductList } from '..';
import { ProductModel } from '../../interfaces/product.interface';
import { getProducts } from '../../services/api-service';
import bg from './bg.png';
import styles from './Main.module.scss';

export const Main = (): JSX.Element => {
  const [products, setProducts] = useState<ProductModel[]>();
  const [fullList, setFullist] = useState<ProductModel[]>();
  const [filtered, setFiltered] = useState<ProductModel[]>();
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getProducts();
      const products = data?.data?.products;

      setFullist(products);

      const productList = getListByPage(page, products);

      setProducts(productList);
    };
    fetch();

    if (isFiltered) {
      const list = filtered && getListByPage(page, filtered);
      console.log(list);
      setProducts(list);
    } else {
      const list = fullList && getListByPage(page, fullList);
      console.log(list);
      setProducts(list);
    }
  }, [page, isFiltered]);

  function getListByPage(pageNumber: number, fullList: ProductModel[]) {
    if (pageNumber < 1) return [];

    const itemsPerPage = 10;
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return fullList.slice(start, end);
  }

  // const onClickPage = (nextPage: number) => {
  //   setPage((nextPage += 1));
  //   if (isFiltered) {
  //     filtered && getListByPage(page, filtered);
  //   } else {
  //     fullList && getListByPage(page, fullList);
  //   }
  // };

  const filteredAvailble = () => {
    setIsFiltered(!isFiltered);
    const filteredList = fullList?.filter(
      product => product.quantity_available > 0,
    );
    setFiltered(filteredList);
  };

  return (
    <main className={styles.main}>
      <Button appearance="primary" onClick={filteredAvailble}>
        available
      </Button>
      {products && <ProductList products={products} />}
      {/* <ul>
    {products?.map(product => (
      <li key={product.name}>{product.name}</li>
    ))}
  </ul> */}
      <button
      // onClick={() => onClickPage(page)}
      >
        more
      </button>
      <img className={styles.bg} src={bg} />
    </main>
  );
};
