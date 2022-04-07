import { useCallback, useEffect } from 'react';
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
        toggleModal && toggleModal();
      }
    },
    [toggleModal],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  return (
    <div className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
