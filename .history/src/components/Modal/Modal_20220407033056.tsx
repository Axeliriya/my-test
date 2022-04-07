import { useState } from 'react';
import { Button } from '..';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';

export const Modal = ({
  isOpen,
  toggleModal,
  children,
}: ModalProps): JSX.Element => {
  return (
    <div className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
