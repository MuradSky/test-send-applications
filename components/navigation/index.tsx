import Image from 'next/image';
import Button from '../button';
import s from './index.module.scss';

const links = [
  {
    id: 1,
    text: 'О форуме',
    href: '#'
  },
  {
    id: 2,
    text: 'Программа',
    href: '#'
  },
  {
    id: 3,
    text: 'Жюри',
    href: '#'
  },
  {
    id: 4,
    text: 'Фото',
    href: '#'
  },
  {
    id: 5,
    text: 'Контакты',
    href: '#'
  }
] 

const Navigation = () => {
  return (
    <div className={s.nav}>
      <div className={s.logo}>
        <Image 
          src="/webp/header/logo.webp"
          alt=''
          width={234}
          height={93}
        />
      </div>

      <div className={s.menu}>
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        
        <Button>
          Регистрация
        </Button>
      </div>
    </div>
  )
}

export default Navigation;
