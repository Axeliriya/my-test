/* eslint no-use-before-define: 0 */
import { useCallback, useEffect, useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';

export const usePortal = (el: HTMLDivElement) => {
  const [portal, setPortal] = useState({
    render: () => null,
    remove: () => null,
  });

  const createPortal = useCallback((el: any) => {
    const Portal = ({ children }: any) => createPortal(children, el);
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
