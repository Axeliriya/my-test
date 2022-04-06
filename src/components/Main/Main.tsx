import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '..';
import { routes } from '../../routes';
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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </main>
  );
};
