import { lazy } from 'react';

const HomePage = lazy(() =>
  import('./pages/HomePage' /*webpackChunkName: "products-page" */).then(
    ({ HomePage }) => ({
      default: HomePage,
    }),
  ),
);

const ProductsPage = lazy(() =>
  import('./pages/ProductsPage' /*webpackChunkName: "products-page" */).then(
    ({ ProductsPage }) => ({
      default: ProductsPage,
    }),
  ),
);

const ProductsDetailsPage = lazy(() =>
  import(
    './pages/ProductsDetailsPage' /*webpackChunkName: "product-details-page" */
  ).then(({ ProductsDetailsPage }) => ({
    default: ProductsDetailsPage,
  })),
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
  },
  {
    path: '/products',
    label: 'Users',
    component: ProductsPage,
  },
  {
    path: '/users/:userId',
    label: 'Products Details',
    component: ProductsDetailsPage,
  },
];
