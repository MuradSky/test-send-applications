'use client';
import Image from 'next/image';
import s from './index.module.scss';
import { useScreenSize } from '@/hooks/useScreenSize';

const Banks = () => {
  const { isMobileMd }  = useScreenSize();
  const items = [
    {
      id: 1,
      path: '/svg/b-mir.svg',
      width: isMobileMd ? 82 : 140,
      height: isMobileMd ? 35 : 62
    },
    {
      id: 2,
      path: '/svg/b-r.svg',
      width: isMobileMd ? 85 : 144,
      height: isMobileMd ? 49 : 84
    },
    {
      id: 3,
      path: '/svg/b-sbp.svg',
      width: isMobileMd ? 72 : 103,
      height: isMobileMd ? 39 : 56
    },
    {
      id: 4,
      path: '/svg/b-fh.svg',
      width: isMobileMd ? 105 : 186,
      height: isMobileMd ? 38 : 69
    },
    {
      id: 5,
      path: '/svg/b-mpf.svg',
      width: isMobileMd ? 41 : 65,
      height: isMobileMd ? 47 : 75
    },
  ]

  return (
    <div className={s.banks}>
      {items.map((item) => (
        <div className={s.item} key={item.id}>
          <Image 
            src={item.path}
            alt=""
            width={item.width}
            height={item.height}
          />
        </div>
      ))}
    </div>
  )
}

export default Banks;
