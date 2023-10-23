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
                <Link to="/signup">
                    <button className="header__button-signup">
                        Регистрация
                    </button>
                </Link>
                <Link to="/signin">
                    <button className="header__button-signin">Войти</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
