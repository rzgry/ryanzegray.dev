import React from 'react';
import styles from './container.module.css';
import cn from 'classnames';

export default function index({ children, className, ...rest }) {
  return (
    <div className={cn(styles.container, className)} {...rest}>
      {children}
    </div>
  );
}
