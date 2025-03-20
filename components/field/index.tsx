'use client';
import { InputHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import s from './index.module.scss';

interface FieldProps extends InputHTMLAttributes<Omit<HTMLInputElement, 'className'>> {
  customClass?: string;
  onErrorField?: (v: boolean) => void;
}

const Filed = ({
  type = 'text',
  customClass,
  value,
  onErrorField,
  ...props
}: FieldProps) => {
  const [error, setError] = useState<string | null>(null);
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(event.target.value)) {
        setError('Неверный адрес электронной почты');
        if (onErrorField) {
          onErrorField(true);
        }
      } else {
        setError(null);
        if (onErrorField) {
          onErrorField(false);
        }
      }
    }
  };
  return (
    <label className={clsx(s.field, value && s.is_filled, customClass)}>
      <input  onBlur={handleBlur} type={type} value={value} {...props} />
      {error && <span className={s.error}>{error}</span>}
    </label>
  );
};

export default Filed;