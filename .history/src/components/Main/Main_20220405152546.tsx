import styles from './Main.module.scss';

export const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      {products && <ProductList products={products} />}
      {/* <ul>
    {products?.map(product => (
      <li key={product.name}>{product.name}</li>
    ))}
  </ul> */}
      <button onClick={() => onClickPage(page)}>more</button>
    </main>
  );
};
