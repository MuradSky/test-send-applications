'use client';
import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import s from './index.module.scss';
import FirstLine from '../animations/first-line';
import FirstArrows from '../animations/first-arrows';
import DotsGrid from '../animations/dots-grid';

const Hero = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!rootRef.current) return;
    const circle = rootRef.current.querySelector('[data-selector="circle"]');

    gsap.to(circle, {
      rotate: 360,
      x: 100,
      y: 100,
      duration: 2,
      ease: "back.inOut(3)",
      repeat: -1,
      repeatDelay: 2,
      yoyo: true
    });

  }, {
    scope: rootRef,
  })

  return (
    <div className={s.block} ref={rootRef}>
      <DotsGrid customClass={s.dotsGrid} />

      <div className={s.circle} data-selector="circle">
        <Image 
          src="/webp/animate/circle-1.webp"
          alt=""
          width={207}
          height={202}
          className='layer1'
          data-selector="parallax.item"
        />
      </div>

      <div className={s.date}>
        <div className={s.inner}>
          <span>16-17 апреля 2025</span>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.top}>
          <Image 
            src="/theme/junior.svg"
            alt=""
            width={670}
            height={127}
          />
          <FirstLine customClass={s.firstLine} />
        </div>
        <div className={s.bottom}>
          <FirstArrows customClass={s.firstArrows} />
          <Image 
            src="/theme/paytech-form.svg"
            alt=""
            width={722}
            height={62}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;
