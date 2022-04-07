const usePortal = (el: HTMLDivElement) => {
  const [portal, setPortal] = useState({
    render: () => null,
    remove: () => null,
  });

  const createPortal = useCallback(el => {
    const Portal = ({ children }) => createPortal(children, el);
    const remove = () => unmountComponentAtNode(el);
    return { render: Portal, remove };
  }, []);

  useEffect(() => {
    if (el) portal.remove();
    const newPortal = createPortal(el);
    setPortal(newPortal);
    return () => newPortal.remove(el);
  }, [el]);

  return portal.render;
};
