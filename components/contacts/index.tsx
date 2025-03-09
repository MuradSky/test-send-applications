import Lattice from '../animations/lattice';
import s from './index.module.scss';

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <Lattice customClass={s.lattice} />
      <Lattice customClass={s.lattice} />
      <div className={s.content}>
        <h2 className={s.title}>Контакты</h2>
        <div className={s.item}>
          <div className={s.key}>Адрес</div>
          <div className={s.val}>
            МГТУ имени Н.Э. Баумана,
            Башня В4К (Бауманская ул., 57)
          </div>
        </div>
        <div className={s.item}>
          <div className={s.key}>E-mail</div>
          <a href="mailto:juniorpaytech@nspk.ru" className={s.val}>
            juniorpaytech@nspk.ru
          </a>
        </div>
      </div>

      <div className={s.map}></div>
    </div>
  )
}

export default Contacts;
