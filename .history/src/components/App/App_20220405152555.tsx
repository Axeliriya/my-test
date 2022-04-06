import { useEffect, useState } from 'react';
import { Layout, ProductList } from '..';
import { ProductModel } from '../../interfaces/product.interface';
import { getProducts } from '../../services/api-service';
import styles from './App.module.scss';
// import { AppProps } from './App.props';

export const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <Layout />
    </div>
  );
};
