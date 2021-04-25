import React from 'react';
import cn from 'classnames';

export default function index({ children, className, ...rest }) {
  return (
    <div
      className={cn('max-w-screen-lg m-auto p-4 px-8 md:px-4', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
