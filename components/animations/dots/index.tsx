'use client';
import clsx from 'clsx';
import s from './index.module.scss';
import { useRef } from 'react';

interface DotsProps {
  customClass?: string;
}

const Dots = ({
  customClass,
}: DotsProps) => {
	const root = useRef<HTMLDivElement | null>(null);

	const dots = Array.from(Array(112).keys())

	console.log(
		dots.length / 2,
		dots[55]
	)

  return (
    <div 
			ref={root}
      className={clsx(
        s.element,
        customClass
      )}
    >
      {dots.map((d, i) => (
        <div
          className={clsx(
						s.point, 
						s['point_'] + (i+1)
					)}
          key={i}
					data-index={i+1}
        />
      ))}
    </div>
  )
}

export default Dots;