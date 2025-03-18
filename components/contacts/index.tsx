'use client';
import dynamic from 'next/dynamic';
import Lattice from '../animations/lattice';
import s from './index.module.scss';

const LazyComponent = dynamic(() => import('./Map'), {
  ssr: false, // Optional: Disable server-side rendering for this component
});

const Contacts = () => {
  return (
    <div className={s.contacts} id="contacts">
      <Lattice customClass={s.lattice} />
      <Lattice customClass={s.lattice} />
      <div className={s.content}>
        <h2 className={s.title}>Контакты</h2>
        <div className={s.item}>
          <div className={s.key}>Адрес</div>
          <div className={s.val}>
            Москва, Конгресс-холл, 
            МГТУ имени Н.Э. Баумана, Башня В4К 
            (Бауманская ул., 57)
          </div>
        </div>
        <div className={s.item}>
          <div className={s.key}>E-mail</div>
          <a href="mailto:juniorpaytech@nspk.ru" className={s.val}>
            juniorpaytech@nspk.ru
          </a>
        </div>
      </div>

      <LazyComponent />
    </div>
  )
}

export default Contacts;
