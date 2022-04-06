export const HomePage = (): JSX.Element => {
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProducts();
        const products = data?.data?.products;
        setFullist(products);
        const productList = getListByPage(page, products);
        setProducts(productList);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
          throw new Error(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [page]);
  return (
    <>
      <div>home</div>
    </>
  );
};
