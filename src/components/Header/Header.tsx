import style from './Header.module.scss';
import Logo from '@/assets/logo/logo.png';
import Theme from '@/assets/icon/theme.svg';
import Language from '@/assets/icon/language.svg';
import Menu from '@/assets/icon/menu.svg';
function Header() {
  return (
    <div className={style['header']}>
      <div className={style['header-navbar']}>
        <img src={Logo} height={100} width={150} alt="logo" />
        <div className={style['header-links']}>
          <a href="/">Skills</a>
          <a href="/about">Portfolio</a>
          <a href="/contact">Stats</a>
          <a href="/contact">Testimonials</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className={style['header-tools']}>
        <div className={'button'}>
          <img className={style['theme-icon']} src={Theme} alt="" width={16} />
        </div>
        <div className={'button'}>
          <img className={style['theme-icon']} src={Language} alt="" width={16} />
        </div>
        <div className={'button'}>Get CV</div>
      </div>
      <div className={style['header-menu-icon']}>
        <div className={'button'}>
          <img src={Menu} alt="" width={16} />
        </div>
      </div>
    </div>
  );
}
export default Header;
