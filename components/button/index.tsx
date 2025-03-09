import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import s from './index.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<Omit<HTMLButtonElement, 'className'>> {
  customClass?: string;
  variant?: 'pink',
}

const Button = ({
  customClass,
  children,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(s.button, s[variant || ''], customClass)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
