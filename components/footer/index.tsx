import Lattice from '../animations/lattice';
import Banks from '../banks';
import Navigation from '../navigation';
import s from './index.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Navigation isFooter />
      <div className={s.center}>
        <Banks />
      </div>
      <div className={s.bottom}>
        <Lattice customClass={s.lat_left} />
        <div className={s.center}>
          <a href="http://" target="_blank" rel="noreferrer">
            Правовая информация
          </a>
          <span>© 2025 Junior PayTech Forum</span>
        </div>
        <Lattice dir="rtl" customClass={s.lat_right} />
      </div>
    </footer>
  )
}

export default Footer;
