'use client';
import { useRef } from 'react';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FirstLine from '../first-line';

import s from './index.module.scss';

const DoubleWaves = ({
  customClass,
}: {
  customClass?: string;
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (!rootRef.current) return;

    gsap.to(rootRef.current.children[0], {
      x: 30,
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
      ease: "back.inOut(1)",
      yoyo: true,
    });

    gsap.to(rootRef.current.children[1], {
      x: -30,
      duration: 2,
      ease: "back.inOut(1)",
      repeat: Infinity,
      repeatDelay: 1,
      yoyo: true,
    });


  }, {
    scope: rootRef
  });

  return (
    <div ref={rootRef} className={clsx(s.doubleWaves, customClass)}>
      <FirstLine isDisabledAnim />
      <FirstLine isDisabledAnim />
    </div>
  )
}

export default DoubleWaves;