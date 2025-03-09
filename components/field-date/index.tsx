'use client';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import s from './index.module.scss';
import clsx from 'clsx';

interface FieldProps extends InputHTMLAttributes<Omit<HTMLInputElement, 'className'>> {
  customClass?: string;
}

const months: { [key: number]: number } = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
}

const Filed = ({
  customClass,
  value,
  onChange,
  ...props
}: FieldProps) => {
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    let value = e.target.value;

    // Убираем все нецифровые символы
    value = value.replace(/\D/g, '');

    // Ограничиваем длину строки до 8 символов (ddmmyyyy)
    if (value.length > 8) {
      value = value.slice(0, 8);
    }

    // Форматируем строку в dd.mm.yyyy
    if (value.length > 2) {
      value = `${value.slice(0, 2)}.${value.slice(2)}`;
    }
    if (value.length > 5) {
      value = `${value.slice(0, 5)}.${value.slice(5)}`;
    }

    if (onChange) onChange(e as ChangeEvent<Omit<HTMLInputElement, 'className'>>);

    setDate(value);
    setError(''); // Сбрасываем ошибку при каждом изменении
  };

  const handleBlur = () => {
    if (date.length === 10) {
      const [day, month, year] = date.split('.').map(Number);

      if (day < 1 || day > months[month-1] || month < 1 || month > 12 || year > 2025) {
        setError('Некорректная дата');
      }
    } else if (date.length > 0) {
        setError('Неполная дата');
    }
  };

  
  return (
    <label className={clsx(s.field, value && s.is_filled, customClass)}>
      <span className={s.label}>
        <span className={clsx(s.mask, date.length > 0 && s.is_show)}>
          <i className={clsx(date.length > 0 && s.hidden)}>_</i>
          <i className={clsx(date.length > 1 && s.hidden)}>_</i>
          <i className={clsx(date.length > 2 && s.hidden)}>.</i>
          <i className={clsx(date.length > 3 && s.hidden)}>_</i>
          <i className={clsx(date.length > 4 && s.hidden)}>_</i>
          <i className={clsx(date.length > 5 && s.hidden)}>.</i>
          <i className={clsx(date.length > 6 && s.hidden)}>_</i>
          <i className={clsx(date.length > 7 && s.hidden)}>_</i>
          <i className={clsx(date.length > 8 && s.hidden)}>_</i>
          <i className={clsx(date.length > 9 && s.hidden)}>_</i>
        </span>
        <input
          type='text'
          value={date}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
      </span>
      {error &&
        <span className={s.error}>{error}</span>
      }
    </label>
  );
};

export default Filed;