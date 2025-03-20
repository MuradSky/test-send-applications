'use client';
import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import s from './index.module.scss';

interface SelectProps {
  onSelect: (v: number) => void;
  customClass?: string;
  placeholder?: string;
  value?: string;
  options: {
    label: string;
    value: number;
  }[],
  defaultValue?: number;
  disabled?: boolean;
}

const Select = ({
  onSelect,
  customClass,
  placeholder,
  options,
  defaultValue,
  disabled,
  value: _value,
}: SelectProps) => {
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [value, setValue] = useState<number>(defaultValue || 0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setValue(
      +Number(options.find(option => option.label === _value)?.value)
    );
  }, [_value, options, defaultValue]);
  
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as Node;
      if (headRef.current && !headRef.current.contains(target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    }
  }, [])

  useEffect(() => {
    if (isOpen && listRef.current) {
      const activeItem = listRef.current.querySelector(`.${s.is_active}`) as HTMLLIElement | null;
      activeItem?.focus();
    }
  }, [isOpen]);

  const handleSelect = (id: number) => () => {
    onSelect(id);
    setValue(id);
    setIsOpen(false);
  }
  
  const title = (value !== null) ? options.find(option => option.value === value)?.label : placeholder;
  
  return (
    <div 
      tabIndex={0}
      role="select"
      className={clsx(
        s.select,
        value && s.is_filled,
        customClass
      )}
    >
      <div
        className={
          clsx(
            s.head,
            isOpen && s.open,
            disabled && s.disabled
          )
        }
        ref={headRef}
        tabIndex={0}
        role="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {isOpen && (
        <div className={s.options}>
          <ul className={s.list} ref={listRef}>
            {options.map(option => (
              <li 
                key={option.value} 
                onClick={handleSelect(option.value)}
                tabIndex={0}
                role="button"
                className={clsx(
                  value === option.value && s.is_active
                )}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
