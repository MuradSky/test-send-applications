'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid , Pagination } from "swiper/modules";

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
    name: 'Набиуллина Э.С.',
    pos: 'Председатель, Банк России',
  },
  {
    id: 5,
    name: 'Гордин М. В.',
    pos: 'Заместитель Мэра Москвы, Правительство Москвы',
  },
  {
    id: 6,
    name: 'Кахруманова З.Н.',
    pos: 'Заместитель Председателя, Банк России',
  },
  {
    id: 2,
    name: 'Сорокина О. Н.',
    pos: 'Член Совета директоров, Заместитель генерального директора по развитию бизнеса, Страховой дом ВСК',
  },
  {
    id: 8,
    name: 'Дубынин Д.Г.',
    pos: 'Генеральный директор, Председатель Правления, НСПК',
  },
  {
    id: 3,
    name: 'Жидков В. О.',
    pos: 'Председатель правления, Мосбиржа',
  },
  {
    id: 4,
    name: 'Багреева М. А.',
    pos: 'Заместитель Мэра Москвы, Правительство Москвы',
  },
  {
    id: 1,
    name: 'Богданов Ю. Ю.',
    pos: 'Заместитель Председателя Совета Директоров, Директор по инновациям, Банка «Центр-инвест»',
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
          modules={[Grid, Pagination]}
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
