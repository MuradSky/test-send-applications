'use client';
import clsx from 'clsx';
import s from './index.module.scss';
import useAnim from '@/hooks/useAnim';

interface IProps {
  customClass?: string;
  dir?: 'ltr' | 'rtl';
  isSecond?: boolean;
}

const Lattice = ({
  customClass,
  isSecond = false,
  dir = 'ltr'
}: IProps) => {
  const isAnim = useAnim(100, 6000);

  if (isSecond) {
    return (
      <div className={clsx(customClass, s[dir], isAnim && s.is_anim, s.element)}>
       <svg viewBox="0 0 381 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M377.656 0.999809L359.587 57.8232" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_1}/>
          <path d="M355.329 1.95391L337.261 58.7773" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_2}/>
          <path d="M333.003 2.9085L314.934 59.7319" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_3}/>
          <path d="M310.68 3.8626L292.611 60.686" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_4}/>
          <path d="M288.353 4.8167L270.284 61.6401" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_5}/>
          <path d="M266.028 5.7708L247.959 62.5942" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_6}/>
          <path d="M243.704 6.72491L225.635 63.5483" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_7}/>
          <path d="M221.378 7.67901L203.321 64.5019" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_8}/>
          <path d="M199.052 8.63311L180.995 65.456" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_9}/>
          <path d="M176.739 9.58672L158.67 66.4101" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_10}/>
          <path d="M154.413 10.5408L136.345 67.3642" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_11}/>
          <path d="M132.087 11.4954L114.018 68.3188" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_12}/>
          <path d="M109.763 12.4495L91.6942 69.2729" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_13}/>
          <path d="M87.4379 13.4036L69.3691 70.227" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_14}/>
          <path d="M65.1117 14.3577L47.0429 71.1811" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_15}/>
          <path d="M42.7875 15.3118L24.7187 72.1352" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_16}/>
          <path d="M20.4594 16.2664L2.39057 73.0898" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_17}/>
        </svg>
      </div>
    );
  };

  return (
    <div className={clsx(customClass, s[dir], isAnim && s.is_anim, s.element)}>
      <svg viewBox="0 0 479 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M477 1L451.266 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_1}/>
        <path d="M448.92 1L423.186 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_2}/>
        <path d="M420.839 1L395.105 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_3}/>
        <path d="M392.761 1L367.027 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_4}/>
        <path d="M364.68 1L338.946 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_5}/>
        <path d="M336.6 1L310.866 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_6}/>
        <path d="M308.521 1L282.787 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_7}/>
        <path d="M280.44 1L254.721 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_8}/>
        <path d="M252.36 1L226.641 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_9}/>
        <path d="M224.295 1L198.561 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_10}/>
        <path d="M196.215 1L170.481 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_11}/>
        <path d="M168.135 1L142.401 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_12}/>
        <path d="M140.056 1L114.322 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_13}/>
        <path d="M111.976 1L86.2418 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_14}/>
        <path d="M83.8945 1L58.1607 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_15}/>
        <path d="M55.8164 1L30.0826 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_16}/>
        <path d="M27.7334 1L1.99959 71" stroke="#E9A45D" strokeWidth="2.5" strokeMiterlimit="10" className={s.line_17}/>
      </svg>
    </div>
  )
};

export default Lattice;