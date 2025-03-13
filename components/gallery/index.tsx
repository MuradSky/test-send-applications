import { Swiper, SwiperSlide } from 'swiper/react';
import s from './index.module.scss';
import Image from 'next/image';
import { useScreenSize } from '@/hooks/useScreenSize';



function Gallery() {
  const { isTablet, isMobileMd } = useScreenSize();
  const images = [
    {
      id: 1,
      img: isTablet ? '/gallery/t-1.webp' : '/gallery/1.webp'
    },
    {
      id: 2,
      img: isTablet ? '/gallery/t-2.webp' : '/gallery/2.webp'
    },
    {
      id: 3,
      img: isTablet ? '/gallery/t-3.webp' : '/gallery/3.webp'
    },
    {
      id: 4,
      img: isTablet ? '/gallery/t-1.webp' : '/gallery/1.webp'
    },
    {
      id: 5,
      img: isTablet ? '/gallery/t-2.webp' : '/gallery/2.webp'
    },
    {
      id: 6,
      img: isTablet ? '/gallery/t-3.webp' : '/gallery/3.webp'
    }
  ]
  return (
    <div className={s.gallery} id="gallery">
      <Swiper
        spaceBetween={isMobileMd ? 6 : 12}
        slidesPerView={isMobileMd ? 2 : 3}
        className="swiper-gallery"
        loop={true}
        centeredSlides={!isMobileMd}
      >
        {images.map(item => (
          <SwiperSlide key={item.id} className={s.slide}>
            <Image src={item.img} alt="" width={592} height={367} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
