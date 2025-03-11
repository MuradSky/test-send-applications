'use client';
import clsx from 'clsx';
import s from './index.module.scss';
import { useState } from 'react';

interface RadioGropProps {
  customClass?: string;
  onSelect: (v: number) => void;
  label: string;
  name?: string;
  options: {
    label: string;
    value: number;
  }[];
  defaultValue?: number;
  disabled?: boolean;
}

const RadioGroup = ({
  customClass,
  label,
  defaultValue,
  options,
  onSelect,
  disabled,
  name = 'radio-group',
}: RadioGropProps) => {
  const [value, setValue] = useState(defaultValue)

  const handleSelect = (v: number) => () => {
    setValue(v);
    onSelect(v);
  };

  return (
    <div className={clsx(
      s.group,
      customClass,
    )}>
      <div className={s.label}>
        {label}
      </div>
      <div className={s.flex}>
        {options.map(option => (
          <label key={option.value} className={clsx(value === option.value && s.is_active, disabled && s.disabled)}>
            <span>{option.label}</span>
            <input
              type="radio"
              name={name}
              checked={value === option.value}
              onChange={handleSelect(option.value)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;