'use client';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import s from './index.module.scss';
const paths = [
  'M0.000127696 438H355.5C476.172 438 574 340.402 574 220C574 99.5983 476.172 2 355.5 2H0.000127696',
  'M-0.000102862 420.181H353.884C464.69 420.181 554.517 330.564 554.517 220C554.517 109.447 464.69 19.8193 353.884 19.8193H-0.000102862',
  'M-0.000333419 402.351H352.269C453.208 402.351 535.033 320.704 535.033 220C535.033 119.285 453.208 37.6494 352.269 37.6494H-0.000333419',
  'M0.000302134 384.532H350.654C441.727 384.532 515.562 310.866 515.562 220C515.562 129.134 441.727 55.4688 350.654 55.4688H0.000302134',
  'M7.1576e-05 366.701H349.038C430.245 366.701 496.078 301.017 496.078 220C496.078 138.972 430.245 73.2983 349.038 73.2983H7.1576e-05',
  'M-0.000158982 348.882H347.423C418.763 348.882 476.595 291.179 476.595 220C476.595 148.821 418.763 91.1177 347.423 91.1177H-0.000158982',
];

const RoundedLines = ({
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
    >
      <svg width="576" height="440" viewBox="0 0 576 440" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </svg>
    </div>
  )
};

export default RoundedLines;