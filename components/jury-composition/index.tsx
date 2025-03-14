'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Autoplay } from 'swiper/modules';

import "swiper/css/grid";
import 'swiper/css';
import 'swiper/css/pagination';

import s from './index.module.scss';
import RoundedLines from '../animations/rounded-lines';
import DoubleWaves from '../animations/double-waves';
import CircleLines from '../animations/circle-lines';
import { useScreenSize } from '@/hooks/useScreenSize';

const data = [
  {
    id: 7,
    name: 'Эльвира \nНабиуллина',
    pos: 'Банк России',
  },
  {
    id: 5,
    name: 'Михаил \nГордин',
    pos: 'Правительство Москвы',
  },
  {
    id: 6,
    name: 'Зульфия \nКахруманова',
    pos: 'Банк России',
  },
  {
    id: 2,
    name: 'Ольга \nСорокина',
    pos: 'Страховой дом ВСК',
  },
  {
    id: 8,
    name: 'Дмитрий \nДубынин',
    pos: 'НСПК',
  },
  {
    id: 3,
    name: 'Виктор \nЖидков',
    pos: 'Мосбиржа',
  },
  {
    id: 4,
    name: 'Мария \nБагреева',
    pos: 'Правительство \nМосквы',
  },
  {
    id: 1,
    name: 'Юрий \nБогданов',
    pos: 'Банк «Центр-инвест»',
  },
];

const JuryComposition = () => {
  const { isTablet, isMobileMd } = useScreenSize();
  return (
    <div className={s.bock} id="juri">
      <h2 className={s.title}>
        Состав жюри
      </h2>
      <div className={s.slider}>
        {!isTablet && <RoundedLines customClass={s.roundedLines} />}
        {!isTablet && <DoubleWaves customClass={s.doubleWaves} />}
        <CircleLines customClass={s.circleLines} />

        <Swiper
          modules={[Grid, Pagination, Autoplay]}
          autoplay={{
            delay: 3000, // Интервал в миллисекундах (3 секунды)
            disableOnInteraction: false, // Продолжает автопрокрутку после взаимодействия
          }}
          loop={true} // Зацикливание
          grid={{ rows: 1 }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              grid: {
                rows: 1,
              },
            }
          }}
          slidesPerView={isMobileMd ? 2 : 'auto' }
          spaceBetween={10}
          className={s.swiper}
        >
          {data.map(item => (
            <SwiperSlide className={s.slide} key={item.id}>
              <div className={s.card}>
                <Image 
                  src={'/webp/juri/'+item.id+'.webp'}
                  alt=""
                  width={250}
                  height={311}
                />
                <div className={s.name}>{item.name}</div>
                <div className={s.pos}>{item.pos}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default JuryComposition;
