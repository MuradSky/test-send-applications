import Image from 'next/image';
import s from './index.module.scss';
import Navigation from '../navigation';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.circle}>
        <Image 
          src="/webp/header/circle.webp"
          alt=''
          width={516}
          height={516}
        />
      </div>
      <Navigation />
    </header>
  )
}

export default Header;