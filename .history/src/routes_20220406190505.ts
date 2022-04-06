import { lazy } from 'react';

const UsersPage = lazy(() =>
  import('./pages/UsersPage' /*webpackChunkName: "users-page" */).then(
    ({ UsersPage }) => ({
      default: UsersPage,
    }),
  ),
);

const UsersPage = lazy(() =>
  import('./pages/UsersPage' /*webpackChunkName: "users-page" */).then(
    ({ UsersPage }) => ({
      default: UsersPage,
    }),
  ),
);

const UserDetailsPage = lazy(() =>
  import(
    './pages/UserDetailsPage' /*webpackChunkName: "user-details-page" */
  ).then(({ UserDetailsPage }) => ({
    default: UserDetailsPage,
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
