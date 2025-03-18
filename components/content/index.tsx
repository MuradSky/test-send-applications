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

  const smoothScroll = (target: HTMLElement, duration: number) => {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY -50;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;
  
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  };
  
  const onClick = (str: string) => () => {
    const block = document.querySelector<HTMLDivElement>('#' + str);
    if (block) {
      smoothScroll(block, 1500);
    }
  };

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
        В 2025 году при поддержке Банка России пройдет уже пятая конференция Junior PayTech Forum. 
        Конференция – это финальная часть проектной деятельности студентов в рамках творческого трека образовательной программы 
        «Финансовые технологии и сервисы платежной системы» 
        <a href="https://cbr.ru/fintech/fin_hub/" target="_blank" rel="noreferrer"> Финтех Хаба Банка России </a> 
        и <a href="https://www.nspk.ru/" target="_blank" rel="noreferrer"> Национальной системы платежных карт</a> (АО НСПК).
        </p>
      </div>
      <Lattice customClass={s.lattice} isSecond />
      <div className={s.second}>
        <p className={s.text}>
        Участники образовательной программы более 6 месяцев учились и работали над концепциями финансовых сервисов, 
        которые помогут сделать жизнь людей удобнее. До финала Junior PayTech Forum 2025 дошли сильнейшие ребята из разных городов России. 
        Финалисты презентуют свои проекты широкой аудитории и поборются за участие в суперфинале! 
        </p>
      </div>
      <div className={s.last}>
        <div className={s.inner}>
          <h2 className={s.title}>
            Приходите на конференцию узнать об этих новых идеях, которые, возможно, уже завтра изменят платежную отрасль.
          </h2>
          <p className={s.subtitle}>
            Кроме того, на мероприятии вас ждет много общения и разные активности, например, возможность впервые сыграть в новые финансовые настольные игры, разработанные участниками образовательной программы.
          </p>
          <p className={s.subtitle}>
            <strong>Регистрируйтесь, будет интересно!</strong>
          </p>
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