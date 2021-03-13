import React from 'react';
import styles from './container.module.css';

export default function index({ children, ...rest }) {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
}
