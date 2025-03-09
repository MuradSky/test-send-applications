'use client';
import clsx from 'clsx';
import s from './index.module.scss';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Shark = ({
  customClass,
}: {
  customClass?: string; 
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!rootRef.current) return;
    const paths = Array.from(rootRef.current.querySelectorAll('svg') || []);

    gsap.to(paths[0], {
      x: 5,
      duration: 2,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "back.inOut(3)",
    });
    gsap.to(paths[1], {
      x: -5 ,
      duration: 2,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      ease: "back.inOut(3)",
    });
  }, {
    scope: rootRef,
  });

  return (
    <div ref={rootRef} className={clsx(s.shark, customClass)} data-selector="parallax.item">
      <svg viewBox="0 0 207 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M145.411 61.1378H207V0.0146001C206.797 0.0146001 206.6 0 206.397 0C172.812 0 145.578 27.3459 145.411 61.1378Z" fill="#6FCFEB"/>
        <path d="M73.0488 61.1378H134.638V0.0146001C134.434 0.0146001 134.238 0 134.034 0C100.45 0 73.2161 27.3459 73.0488 61.1378Z" fill="#6FCFEB"/>
        <path d="M0.686523 61.1378H62.2759V0.0146001C62.0722 0.0146001 61.8758 0 61.6721 0C28.0878 0 0.853826 27.3459 0.686523 61.1378Z" fill="#6FCFEB"/>
      </svg>
      <svg viewBox="0 0 208 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M145.718 62.0001H207.307V0.876904C207.103 0.876904 206.907 0.862305 206.703 0.862305C173.119 0.862305 145.885 28.2082 145.718 62.0001Z" stroke="#E40F95" stroke-width="0.71" stroke-miterlimit="10"/>
        <path d="M73.3623 62.0001H134.952V0.876904C134.748 0.876904 134.552 0.862305 134.348 0.862305C100.764 0.862305 73.5296 28.2082 73.3623 62.0001Z" stroke="#E40F95" stroke-width="0.71" stroke-miterlimit="10"/>
        <path d="M1 62.0001H62.5893V0.876904C62.3857 0.876904 62.1893 0.862305 61.9856 0.862305C28.4013 0.862305 1.16003 28.2082 1 62.0001Z" stroke="#E40F95" stroke-width="0.71" stroke-miterlimit="10"/>
      </svg>
    </div>
  )
};

export default Shark;