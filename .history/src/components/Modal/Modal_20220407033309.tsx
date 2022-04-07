import { useCallback, useState } from 'react';
import { Button } from '..';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';

export const Modal = ({
  isOpen,
  toggleModal,
  children,
}: ModalProps): JSX.Element => {
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        onOpenModal();
      }
    },
    [onOpenModal],
  );

  useEffect(() => {
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal, handleKeyDown]);
  return (
    <div className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
