'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import s from './index.module.scss';
import RoundedLines from '../animations/rounded-lines';
import DoubleWaves from '../animations/double-waves';
import CircleLines from '../animations/circle-lines';

const data = [
  {
    id: 1,
    name: 'Богданов Ю. Ю.',
    pos: 'Заместитель Председателя Совета Директоров, Директор по инновациям, Банка «Центр-инвест»',
  },
  {
    id: 2,
    name: 'Сорокина О. Н.',
    pos: 'Член Совета директоров, Заместитель генерального директора по развитию бизнеса, Страховой дом ВСК',
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
    id: 7,
    name: 'Набиуллина Э.С.',
    pos: 'Председатель, Банк России',
  },
  {
    id: 8,
    name: 'Дубынин Д.Г.',
    pos: 'Генеральный директор, Председатель Правления, НСПК',
  },
];

const JuryComposition = () => {
  return (
    <div className={s.bock}>
      <h2 className={s.title}>
        Состав жюри
      </h2>
      <div className={s.slider}>
        <RoundedLines customClass={s.roundedLines} />
        <DoubleWaves customClass={s.waves} />
        <CircleLines customClass={s.circleLines} />
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          loop={true}
        >
          {data.map(item => (
            <SwiperSlide className={s.card} key={item.id}>
              <Image 
                src={'/webp/juri/'+item.id+'.webp'}
                alt=""
                width={250}
                height={311}
              />
              <div className={s.name}>{item.name}</div>
              <div className={s.pos}>{item.pos}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default JuryComposition;
