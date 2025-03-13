'use client';
import Image from 'next/image';
import Button from '../button';
import s from './index.module.scss';
import clsx from 'clsx';

const links = [
  {
    id: 1,
    text: 'О форуме',
    href: 'content'
  },
  {
    id: 2,
    text: 'Программа',
    href: 'program'
  },
  {
    id: 3,
    text: 'Жюри',
    href: 'juri'
  },
  // {
  //   id: 4,
  //   text: 'Фото',
  //   href: 'photo'
  // },
  {
    id: 5,
    text: 'Контакты',
    href: 'contacts'
  }
] 

const Navigation = ({
  isFooter=false
}: { isFooter?: boolean }) => {
  const onClick = (str: string) => () => {
    const block = document.querySelector<HTMLDivElement>('#'+str);
    const top = block?.offsetTop as number;

    window.scrollTo({
      top: top - 100,
      behavior: 'smooth',
    })
  } 

  return (
    <div className={clsx(s.nav, isFooter && s.is_footer)}>
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
              <button onClick={onClick(link.href)}>{link.text}</button>
            </li>
          ))}
        </ul>
        
        <Button customClass={s.button} onClick={onClick('register')}>
          Регистрация
        </Button>
      </div>
    </div>
  )
}

export default Navigation;
