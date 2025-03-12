'use client';
import Image from 'next/image';

import Shark from '../animations/shark';
import ThirdArrows from '../animations/third-arrows';
import RegisterForm from '../register-form';
import s from './index.module.scss';
import DotsGrid from '../animations/dots-grid';

const Register = () => {
  return (
    <div className={s.block}>
      <Shark customClass={s.shark} />

      <DotsGrid customClass={s.dots_grid} />

      <div className={s.circle}>
        <Image
          src="/webp/animate/circle-1.webp"
          alt=""
          width={219}
          height={213}
          className="layer1"
          data-selector="parallax.item"
        />
      </div>

      <div className={s.cross}>
        <Image
          src="/webp/animate/x-1.webp"
          alt=""
          width={267}
          height={267}
          className="layer3"
          data-selector="parallax.item"
        />
      </div>

      <div className={s.container} id="register">
        <div className={s.box}>
          <div className={s.head}>
            <ThirdArrows customClass={s.arrows_left} />
            <div className={s.title}>Регистрация</div>
            <ThirdArrows customClass={s.arrows_right} />
          </div>
          <div className={s.text}>
            Вход по предварительной регистрации. Количество мест в зале ограничено, успейте зарегистрироваться.
          </div>
          <RegisterForm />
          <div className={s.info}>
            Нажимая кнопку “Зарегистрироваться” вы соглашаетесь с условиями обработки <a href="/Junior Pay Tech Forum_Согласие ПД.pdf" target="_blank" rel="noreferrer noopener">персональных данных.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;