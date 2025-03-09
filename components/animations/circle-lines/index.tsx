'use client';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import s from './index.module.scss';
const paths = [
  "M162.564 404.153L-97.3672 144.227",
  "M176.774 389.945L-83.1572 130.012",
  "M190.984 375.737L-68.9473 115.804",
  "M205.194 361.522L-54.7373 101.589",
  "M219.405 347.313L-40.5195 87.3799",
  "M233.62 333.099L-26.3105 73.1719",
  "M247.831 318.89L-12.0996 58.9561",
  "M262.041 304.682L2.11035 44.748",
  "M276.25 290.467L16.3193 30.5332",
  "M290.461 276.258L30.5303 16.3242",
  "M304.67 262.042L44.7461 2.11523",
  "M318.888 247.834L58.957 -12.0996",
  "M333.098 233.618L73.167 -26.3086",
  "M347.308 219.41L87.377 -40.5234",
  "M361.518 205.201L101.587 -54.7324",
  "M375.728 190.987L115.797 -68.9404",
  "M389.938 176.778L130.014 -83.1553",
  "M404.155 162.563L144.224 -97.3643",
  "M418.365 148.355L158.434 -111.578",
  "M432.576 134.146L172.645 -125.787",
  "M446.784 119.931L186.854 -139.996"
];

const CircleLines = ({
  customClass,
}: {
  customClass?: string
}) => {
  const colorClass = useRef<string>(s.is_pink);
  const [isAnim, setIsAnim] = useState(false);

  useEffect(() => {
    let firstTimer: NodeJS.Timeout | null = null;
    let lastTimer: NodeJS.Timeout | null = null;

    if (!isAnim) {
      firstTimer = setTimeout(() => {
        setIsAnim(true);
      }, 0);
    } else {
      lastTimer = setTimeout(() => {
        if (colorClass.current === s.is_pink) {
          colorClass.current = s.is_blue; 
          return setIsAnim(false);
        }
        if (colorClass.current === s.is_blue) {
          colorClass.current = s.is_gold;
          return setIsAnim(false);
        }
        if (colorClass.current === s.is_gold) {
          colorClass.current = s.is_pink;
          return setIsAnim(false);
        }
      }, 5000);
    }

    return () => {
      clearInterval(firstTimer as unknown as NodeJS.Timeout);
      clearInterval(lastTimer as unknown as NodeJS.Timeout);
    }
  }, [isAnim]);
  
  return (
    <div
      className={clsx(
        s.element,
        isAnim && s.is_anim,
        colorClass.current,
        customClass
      )}
      data-selector="parallax.item"
    >
      <svg width="321" height="321" viewBox="0 0 321 321" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_91_2804" style={{ maskType:'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="321" height="321">
          <path d="M160.5 321C249.142 321 321 249.142 321 160.5C321 71.8583 249.142 0 160.5 0C71.8583 0 0 71.8583 0 160.5C0 249.142 71.8583 321 160.5 321Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_91_2804)">
          {paths.map((item, i) => (
            <path
              key={i}
              d={item}
              stroke={
                colorClass.current === s.is_pink ? '#E40F95' :
                  colorClass.current === s.is_blue ? '#6FCFEB' : 
                  colorClass.current === s.is_gold ? '#E9A45D' : ''
              }
              strokeWidth="2.5"
              strokeMiterlimit="10"
              className={s['path_'+(i+1)]}
            />
          ))}
        </g>
      </svg>
    </div>
  )
};

export default CircleLines;