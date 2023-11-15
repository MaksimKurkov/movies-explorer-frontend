import { Link } from 'react-router-dom';
import logo from '../../images/HeaderLogo.svg';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <Link to="/" rel=''>
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <nav className="header__button-conteiner">
        <Link to="/signup" className="header__button-signup">
          <p className="header__text-signup">Регистрация</p>
        </Link>
        <Link to="/signin" className="header__button-signin">
          <p className="header__text-signin">Войти</p>
        </Link>
      </nav>
    </header >
  )
}
