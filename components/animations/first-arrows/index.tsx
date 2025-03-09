'use client';
import { useRef } from 'react';
import clsx from 'clsx';
import s from './index.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useAnim from '@/hooks/useAnim';

interface FirstArrowsProps {
  customClass?: string;
}

const FirstArrows = ({
  customClass
}: FirstArrowsProps) => {
  const isAnim = useAnim();
  const svgRef = useRef<SVGSVGElement | null>(null);
  useGSAP(() => {
    if (svgRef.current) {
      const children = Array.from(svgRef.current.children)
      
      if (isAnim) {
        children.slice(0, 5).forEach((el, i) => {
          const delay = i * 0.1;
          gsap.to(el, {
            x: 10,
            duration: .5,
            delay,
            onComplete() {
              gsap.to(el, {
                x: 0,
                duration: .5,
              });
            }
          });
        })

        gsap.to(children[5], {
          rotate: 360,
          ease: "elastic.out(1,0.3)",
          duration: 2,
          transformOrigin: '30% 50%',
          delay: 1,
          onComplete() {
            gsap.set(children[5], {
              rotate: 0,
            });
          }
        });
      }
    }
  }, {
    scope: svgRef,
    dependencies: [isAnim],
  })

  return (
    <div className={clsx(s.element, isAnim && s.is_anim,  customClass)}>
      <svg viewBox="0 0 217 37" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef}>
        <path className={s.arrow_1} d="M0 0V36.9909L29.4512 18.3902L0 0Z" fill="#E40F95" data-seletor="first"/>
        <path className={s.arrow_2} d="M37.5078 0V36.9909L66.9591 18.3902L37.5078 0Z" fill="#E40F95"/>
        <path className={s.arrow_3} d="M75.0254 0V37L104.468 18.3902L75.0254 0Z" fill="#E40F95"/>
        <path className={s.arrow_4} d="M112.533 0V37L141.984 18.3902L112.533 0Z" fill="#E40F95"/>
        <path className={s.arrow_5} d="M150.04 0V37L179.491 18.3902L150.04 0Z" fill="#E40F95"/>
        <path className={s.arrow_6} d="M187.558 0V37L217 18.3902L187.558 0Z" fill="#E40F95" data-seletor="second"/>
      </svg>
    </div>
  );
};

export default FirstArrows;
