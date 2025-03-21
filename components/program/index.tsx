'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Shark from '../animations/shark';
import s from './index.module.scss';
import DotsGrid from '../animations/dots-grid';
import clsx from 'clsx';

const items = [
  {
    date: '16 апреля',
    list: [
      {
        time: '10:00 - 11:30',
        title: 'Регистрация участников, кофе-брейк, Финансовые настольные игры 1-2',
      },
      {
        time: '11:30 - 11:35',
        title: 'Открытие Junior PayTech Forum 2025',
      },
      {
        time: '11:35 - 13:40',
        title: 'Презентация и защита идей проектов Премьер-лиги',
      },
      {
        time: '13:40 - 15:00',
        title: 'Кофе-брейк, Финансовые настольные игры 3-4',
      },
      {
        time: '15:00 - 17:00',
        title: 'Презентация и защита идей проектов Премьер-лиги и Мастер-лиги',
      },
      {
        time: '17:00 - 18.00',
        title: 'Подведение итогов, награждение победителя Мастер-лиги и объявление финалистов Премьер-лиги',
      }
    ]
  },
  {
    date: '17 апреля',
    list: [
      {
        time: '12:30 - 14:00',
        title: 'Регистрация участников, кофе-брейк, Финансовые настольные игры 5-6',
      },
      {
        time: '14:00 - 14:10',
        title: 'Открытие финала Премьер-лиги Junior PayTech Forum 2025',
      },
      {
        time: '14:10 - 15:30',
        title: 'Презентация и защита идей проектов финалистов Премьер-лиги',
      },
      {
        time: '15:30 - 16:00',
        title: 'Награждение',
      }
    ]
  }
]

const Program = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!rootRef.current) return;
    const cross = rootRef.current.querySelector('[data-selector="cross-1"]');
    const circle = rootRef.current.querySelector('[data-selector="circle"]');
    
    gsap.to(circle, {
      rotate: 360,
      duration: 2,
      x: 100,
      ease: "back.inOut(3)",
      repeat: -1,
      repeatDelay: 2,
      yoyo: true
    });

    gsap.to(cross, {
      y: 100,
      duration: 2,
      ease: "back.inOut(3)",
      repeat: -1,
      repeatDelay: 2,
      yoyo: true
    });

  }, {
    scope: rootRef
  });

  return (
    <div className={s.block} ref={rootRef} id="program">
      <Shark customClass={clsx(s.shark, 'layer1')} />
    
      <div className={s.circle} data-selector="circle">
        <Image
          src="/webp/animate/circle-1.webp"
          alt=""
          width={275}
          height={268}
          className='layer2'
          data-selector="parallax.item"
        />
      </div>

      <div className={s.cross} data-selector="cross-1">
        <Image
          src="/webp/animate/x-1.webp"
          alt=""
          width={311}
          height={311}
          data-selector="parallax.item"
        />
      </div>

      <DotsGrid customClass={s.dots_grid} color="pink" />

      <div className={s.wrap}>
        <h2 className={s.title}>Программа конференции</h2>
        <div className={s.content}>
          {items.map((item, index) => (
            <div key={index} className={s.item}>
              <h3 className={s.date}>{item.date}</h3>
              <ul className={s.list}>
                {item.list.map(item => (
                  <li key={item.time}>
                    <div className={s.inner}>
                      <span className={s.time}>
                        <span>
                          {item.time}
                        </span>
                      </span>
                      <span className={s.title}>{item.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;
