import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import s from './index.module.scss';

interface FieldProps extends InputHTMLAttributes<Omit<HTMLInputElement, 'className'>> {
  customClass?: string;
}

const Filed = ({
  type = 'text',
  customClass,
  value,
  ...props
}: FieldProps) => {
  
  return (
    <label className={clsx(s.field, value && s.is_filled, customClass)}>
      <input type={type} value={value} {...props} />
    </label>
  );
};

export default Filed;