import { useCallback, useEffect, useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';

export const usePortal = (el: HTMLDivElement) => {
  const [portal, setPortal] = useState({
    render: () => null,
    remove: () => null,
  });

  const createPortal = useCallback((el: any, children?: any) => {
    const Portal = ({ children }: any) => createPortal(el, children);
    const remove = () => unmountComponentAtNode(el);
    return { render: Portal, remove };
  }, []);

  useEffect(() => {
    if (el) portal.remove();
    const newPortal: any = createPortal(el);
    setPortal(newPortal);
    return () => newPortal.remove(el);
  }, [el]);

  return portal.render;
};
