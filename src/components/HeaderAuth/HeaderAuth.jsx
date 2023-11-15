import { Link, useLocation } from "react-router-dom";
import headerLogo from '../../images/HeaderLogo.svg';
import buttonImg from '../../images/HeaderAuthImg.svg';
import './HeaderAuth.css';

export function HeaderAuth( {burgerClick} ) {
    const location = useLocation();
    const mainLink = location.pathname === '/';
    const movieLink = location.pathname === '/movies';
    const savedmovieLink = location.pathname === '/saved-movies';
    const profileLink = location.pathname === '/profile';
    return (
        <header className={`header-auth ${mainLink ? 'header-auth_main' : ''}`} >
            <Link to="/" rel=''>
                <img className="header-auth__logo" src={headerLogo} alt="Логотип" />
            </Link>
            <button className="header-auth__burger" onClick={burgerClick}></button>
            <nav className="header-auth__nav-bar">
                <ul className="header-auth__list">
                    <li className="header-auth__item">
                        <Link
                            to="/movies"
                            className={`header-auth__button link ${movieLink ? 'header-auth__button-active' : ''}`}
                        >
                            Фильмы
                        </Link>
                    </li>
                    <li className="header-auth__item">
                        <Link
                            to="/saved-movies"
                            className={`header-auth__button link ${savedmovieLink ? 'header-auth__button-active' : ''}`}
                        >
                            Сохранённые фильмы
                        </Link>
                    </li>
                    <li className="header-auth__item">
                        <Link
                            to="/profile"
                            className={`header-auth__link link ${profileLink ? 'header-auth__link-active' : ''}`}
                        >
                            <p className="header-auth__link-text">Аккаунт</p>
                            <div
                                className={`header-auth__profile ${mainLink ? 'header-auth__profile_main' : ''}`}
                            >
                                <img className="header-auth__avatar"
                                    src={buttonImg}
                                    alt="Кнопка личного кабинета пользователя"
                                />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            </header >
    );
}