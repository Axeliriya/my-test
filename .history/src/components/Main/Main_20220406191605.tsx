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
