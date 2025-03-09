import { useRef } from 'react';
import clsx from 'clsx';
import s from './index.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface FirstLineProps {
  customClass?: string;
  isDisabledAnim?: boolean;
}

const FirstLine = ({
  customClass,
  isDisabledAnim
}: FirstLineProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (rootRef.current && !isDisabledAnim) {
      gsap.to(rootRef.current, {
        y: 20,
        delay: .5,
        duration: 1,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
        ease: "back.inOut(4)",
      });
    }
  }, {
    scope: rootRef
  });

  return (
    <div className={clsx(s.element, customClass)} ref={rootRef}>
      <svg viewBox="0 0 362 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6FCFEB">
              <animate attributeName="stop-color" values="#6FCFEB; #E40F95; #6FCFEB" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#E40F95">
              <animate attributeName="stop-color" values="#E40F95; #6FCFEB; #E40F95" dur="4s" repeatCount="indefinite" />
            </stop>
            <animate attributeName="x1" values="0%; 100%; 0%" dur="4s" repeatCount="indefinite" />
            <animate attributeName="x2" values="100%; 200%; 100%" dur="4s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        <path 
          className="wave"
          d="M355.21 48C339.298 48 331.262 36.9016 324.807 27.9866C318.345 19.0577 313.958 13.5887 305.392 13.5887C296.827 13.5887 
            292.44 19.0577 285.978 27.9936C279.522 36.9086 271.5 48 255.588 48C239.683 48 231.661 36.9016 225.205 27.9866C218.75 19.0577 
            214.356 13.5887 205.805 13.5887C197.267 13.5887 192.88 19.0577 186.425 27.9866C179.976 36.9016 171.961 48 156.07 48C140.165 
            48 132.143 36.9016 125.694 27.9866C119.239 19.0577 114.852 13.5887 106.301 13.5887C97.7631 13.5887 93.376 19.0577 86.9207 
            27.9866C80.4723 36.9016 72.4501 48 56.5451 48C40.64 48 32.6248 36.9016 26.1765 27.9866C19.7211 19.0647 15.334 13.5887 6.79655 
            13.5887C3.03616 13.5887 0 10.5473 0 6.79436C0 3.04142 3.03616 0 6.78263 0C22.6877 0 30.7029 11.0984 37.1512 20.0203C43.6066 
            28.9423 47.9937 34.4183 56.5312 34.4183C65.0826 34.4183 69.4697 28.9493 75.925 20.0203C82.3734 11.1054 90.3955 0.0069719 106.294 
            0.0069719C122.199 0.0069719 130.221 11.1054 136.669 20.0203C143.125 28.9493 147.512 34.4183 156.063 34.4183C164.601 34.4183 168.981 
            28.9493 175.436 20.0203C181.884 11.1054 189.9 0 205.805 0C221.71 0 229.732 11.0984 236.187 20.0134C242.643 28.9423 247.037 34.4113 255.588 
            34.4113C264.146 34.4113 268.533 28.9423 274.996 20.0134C281.451 11.0984 289.487 0 305.399 0C321.311 0 329.347 11.0984 335.803 20.0134C342.265 
            28.9423 346.652 34.4113 355.217 34.4113C358.964 34.4113 362 37.4527 362 41.2056C362 44.9586 358.964 48 355.217 48H355.21Z" 
          fill="url(#waveGradient)"
        />
      </svg>
    </div>
  );
};

export default FirstLine;


