import { forwardRef } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = forwardRef(
  ({ type = 'button', children, className, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      type={type}
      className={cn(
        styles.btn,
        { [styles['btn--submit']]: type === 'submit' },
        className
      )}
    >
      {children}
    </button>
  )
);
