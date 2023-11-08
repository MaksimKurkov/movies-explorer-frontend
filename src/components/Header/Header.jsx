import './Header.css';
import logo from '../../images/HeaderLogo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            <div className="header__button-conteiner">
                <Link to="/signup" className="header__button-signup">
                    <p className="header__text-signup">Регистрация</p>
                </Link>
                <Link to="/signin" className="header__button-signin">
                    <p className="header__text-signin">Войти</p>
                </Link>
            </div>
        </header>
    );
}

export default Header;
