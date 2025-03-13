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
  {
    id: 4,
    text: 'Фото',
    href: 'gallery'
  },
  {
    id: 5,
    text: 'Контакты',
    href: 'contacts'
  }
] 

const Navigation = ({
  isFooter=false
}: { isFooter?: boolean }) => {
  function smoothScroll(element: HTMLDivElement, duration: number) {
    
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t: number, b:number, c:number, d:number) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  }

  const onClick = (str: string) => () => {
    const block = document.querySelector<HTMLDivElement>('#'+str);
    smoothScroll(block as HTMLDivElement, 1500);
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
