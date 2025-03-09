import Image from 'next/image';
import s from './index.module.scss';

const items = [
  {
    id: 1,
    path: '/svg/b-mir.svg',
    width: 140,
    height: 62
  },
  {
    id: 2,
    path: '/svg/b-r.svg',
    width: 144,
    height: 84
  },
  {
    id: 3,
    path: '/svg/b-sbp.svg',
    width: 103,
    height: 56
  },
  {
    id: 4,
    path: '/svg/b-fh.svg',
    width: 186,
    height: 69
  },
  {
    id: 5,
    path: '/svg/b-mpf.svg',
    width: 65,
    height: 75
  },
]

const Banks = () => {
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
