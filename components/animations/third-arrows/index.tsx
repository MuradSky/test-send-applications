'use client';
import clsx from 'clsx';
import s from './index.module.scss';
import useAnim from '@/hooks/useAnim';

interface FirstArrowsProps {
  customClass?: string;
}

const ThirdArrows = ({
  customClass
}: FirstArrowsProps) => {
  const isAnim = useAnim();

  return (
    <div className={clsx(s.element, isAnim && s.is_anim,  customClass)}>
      <svg viewBox="0 0 179 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0.5V30.4926L24.6582 15.411L0.5 0.5Z" fill="#6FCFEB" className={s.arrow_1} />
        <path d="M31.2666 0.5V30.4926L55.4248 15.411L31.2666 0.5Z" fill="#E40F95" className={s.arrow_2}/>
        <path d="M62.041 0.5V30.5L86.1918 15.411L62.041 0.5Z" fill="#6FCFEB" className={s.arrow_3}/>
        <path d="M92.8076 0.5V30.5L116.966 15.411L92.8076 0.5Z" fill="#E40F95" className={s.arrow_4}/>
        <path d="M123.574 0.5V30.5L147.732 15.411L123.574 0.5Z" fill="#6FCFEB" className={s.arrow_5}/>
        <path d="M154.35 0.5V30.5L178.5 15.411L154.35 0.5Z" fill="#E40F95" className={s.arrow_6}/>
      </svg>
    </div>
  );
};

export default ThirdArrows;
