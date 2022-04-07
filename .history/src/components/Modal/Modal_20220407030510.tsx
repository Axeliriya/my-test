import { useState } from 'react';
import { Button } from '..';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';

export const Modal = ({ children }: ModalProps): JSX.Element => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
