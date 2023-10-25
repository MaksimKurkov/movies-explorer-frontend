import './SignUp.css';
import { Link } from 'react-router-dom';
import logo from '../../images/HeaderLogo.svg';

export function SignUp() {
    return (
        <main className="main">
            <section className="sign-up">
                <Link to="/">
                    <img src={logo} alt="Логотип" className="sign-up__logo" />
                </Link>
                <h1 className="sign-up__title">Добро пожаловать!</h1>
                <form method="post" className="sign-up__form">
                    <fieldset className="sign-up__input-container">
                        <p className="sign-up__text">Имя</p>
                        <input
                            id="name"
                            type="name"
                            className="sign-up__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            name="name"
                        />
                        <span id="error-email" className="sign-up__error"></span>
                    </fieldset>
                    <fieldset className="sign-up__input-container">
                        <p className="sign-up__text">E-mail</p>
                        <input
                            id="email"
                            type="email"
                            className="sign-up__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            name="email"
                        />
                        <span id="error-email" className="sign-up__error"></span>
                    </fieldset>
                    <fieldset className="sign-up__input-container">
                        <p className="sign-up__text">Пароль</p>
                        <input
                            id="password"
                            type="password"
                            className="sign-up__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="200"
                            name="password"
                        />
                        <span id="error-pass" className="sign-up__error"></span>
                    </fieldset>
                    <button className="sign-up__button link" type="submit">
                        Зарегистрироваться
                    </button>
                </form>
                <p className="sign-up__info">
                    Уже зарегистрированы?{' '}
                    <Link
                        to="/signin"
                        className="sign-up__link"
                    >
                        Войти
                    </Link>
                </p>
            </section>
        </main>
    );
}
