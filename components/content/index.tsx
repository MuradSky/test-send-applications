'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Lattice from '../animations/lattice';
import Button from '../button';
import SecondArrows from '../animations/second-arrows';
import RoundedLines from '../animations/rounded-lines';

import s from './content.module.scss';
import DoubleWaves from '../animations/double-waves';
import DotsGrid from '../animations/dots-grid';
import clsx from 'clsx';

const Content = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!rootRef.current) return;
    const cross = rootRef.current.querySelector('[data-selector="cross-1"]');
    const cross2 = rootRef.current.querySelector('[data-selector="cross-2"]');
    const querter = rootRef.current.querySelector('[data-selector="querter"]') as HTMLDivElement;

    gsap.to(cross, {
      rotate: 90,
      duration: .5,
      x: 50,
      ease: "back.inOut(3)",
      repeat: -1,
      repeatDelay: 2,
      yoyo: true
    });

    gsap.to(cross2, {
      rotate: -180,
      x: -300,
      y: 50,
      duration: 1,
      ease: "back.inOut(3)",
      repeat: Infinity,
      repeatDelay: 2,
      yoyo: true
    });

    gsap.to(querter, {
      rotate: 90,
      transformOrigin: "bottom left",
      ease: "back.inOut(2)",
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
      yoyo: true,
    });

  }, {
    scope: rootRef
  });

  const onClick = (str: string) => () => {
    const block = document.querySelector<HTMLDivElement>('#'+str);
    const top = block?.offsetTop as number;

    window.scrollTo({
      top: top - 100,
      behavior: 'smooth',
    })
  } 

  return (
    <div className={s.block} ref={rootRef} id="content">
      <RoundedLines customClass={s.rounded_lines} />
      
      <div className={s.cross} data-selector="cross-1">
        <Image
          src="/webp/animate/x-1.webp"
          alt=""
          width={311}
          height={311}
          className='layer3'
          data-selector="parallax.item"
        />
      </div>

      <div className={s.cross_2} data-selector="cross-2">
        <Image
          src="/webp/animate/x-2.webp"
          alt=""
          width={101}
          height={102}
          className='layer2'
          data-selector="parallax.item"
        />
      </div>

      <DoubleWaves customClass={s.waves} />

      <DotsGrid color="gold" customClass={clsx(s.dots_grid, 'layer3')}  />

      <div className={s.querter} data-selector="querter">
        <Image
          src="/svg/querter.svg"
          alt=""
          width={130}
          height={130}
        />
      </div>

      <div className={s.first}>
        <p className={s.text}>
          В 2025 году конференция Junior PayTech Forum при поддержке Банка России пройдет уже в 5-й раз. 
          Конференция – финальная часть проектной деятельности студентов в рамках творческого трека совместной 
          программы «Финансовые технологии и сервисы платежной системы» Финтех Хаба Банка России и Национальной системы платежных карт (НСПК).
        </p>
      </div>
      <Lattice customClass={s.lattice} isSecond />
      <div className={s.second}>
        <p className={s.text}>
          Более 6 месяцев участники программы работали над концепциями финансовых сервисов, которые призваны улучшить и упростить жизнь граждан. 
          До финала конференции Junior PayTech Forum дошли сильнейшие ребята из разных городов России. Они презентуют свои проекты 
          широкой аудитории и поборются за участие в суперфинале.
        </p>
      </div>
      <div className={s.last}>
        <div className={s.inner}>
          <h2 className={s.title}>
            Приходите познакомиться с идеями сервисов, разработанными молодыми <br/> и перспективными ребятами!
          </h2>
          <div className={s.bottom}>
            <SecondArrows customClass={s.arrows_left} />
            <Button onClick={onClick('register')} customClass={s.button}>
              Регистрация
            </Button>
            <SecondArrows customClass={s.arrows_right} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;