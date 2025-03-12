'use client';
import ReactDOM from 'react-dom';
import React from 'react';
import s from './index.module.scss';
import customization from './customization.json';
import Image from 'next/image';
import { useScreenSize } from '@/hooks/useScreenSize';


const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify');
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
const {
  YMap, 
  YMapDefaultSchemeLayer, 
  YMapDefaultFeaturesLayer,
} = reactify.module(ymaps3);

const markerElement = (
  <div className={s.hint}>
    <Image
      src="/uni.png"
      alt=""
      width={62.39}
      height={95}
    />
    <div>
      <strong>Конгресс-холл</strong>
      <span>
        МГТУ имени Н.Э. Баумана,
        Башня В4К (Бауманская ул., 57)
      </span>
    </div>
  </div>
);

const Map = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className={s.map}>
      {markerElement}
      <YMap 
        location={{center: [37.681151, 55.766721], zoom: isMobile ? 17 : 17}}
      >
        <YMapDefaultSchemeLayer
          theme="dark"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          customization={customization}  
        />
        <YMapDefaultFeaturesLayer visible={false} />
      </YMap>
    </div>
  );
}

export default Map;
