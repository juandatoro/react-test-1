import { forwardRef } from 'react';

export const Button = forwardRef(
  ({ type = 'button', children, ...props }, ref) => (
    <button {...props} ref={ref} type={type} className='btn'>
      {children}
    </button>
  )
);
