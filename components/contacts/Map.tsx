
'use client';
import { useEffect, useRef } from 'react';
import s from './index.module.scss';

const Map = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const s = `
      <div class="map-pin">
        <img
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
    `;
    function init() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const map = new ymaps.Map("ymaps",{
          zoom: 17,
          center: [55.766721, 37.681151],
          controls: ["zoomControl"]
      }, {
        balloonPanelMaxMapArea: 0,
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const a = new ymaps.Placemark(map.getCenter(),{
          balloonContent: s
      });

      map.geoObjects.add(a);
      map.behaviors.disable("scrollZoom");
      a.balloon.open();
      a.balloon.events.add("click", function() {
          // a.balloon.close()
      });
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ymaps.ready(init);
  }, []);

  return (
    <div className={s.map} ref={mapRef} id="ymaps" />
  );
};

export default Map;
