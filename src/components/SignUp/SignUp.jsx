import '../SignUp/SignUp.css';
import { Link } from 'react-router-dom';
import logo from '../../images/HeaderLogo.svg';

export function SignUp() {
    return (
        <main className="main">
            <section className="signUp">
                <Link to="/">
                    <img src={logo} alt="Логотип" className="signUp__logo" />
                </Link>
                <h1 className="signUp__title">Добро пожаловать!</h1>
                <form method="post" className="signUp__form">
                    <fieldset className="signUp__input-container">
                        <p className="signUp__text">Имя</p>
                        <input
                            id="name"
                            type="name"
                            className="signUp__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            name="name"
                        />
                        <span id="error-email" className="signUp__error"></span>
                    </fieldset>
                    <fieldset className="signUp__input-container">
                        <p className="signUp__text">E-mail</p>
                        <input
                            id="email"
                            type="email"
                            className="signUp__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            name="email"
                        />
                        <span id="error-email" className="signUp__error"></span>
                    </fieldset>
                    <fieldset className="signUp__input-container">
                        <p className="signUp__text">Пароль</p>
                        <input
                            id="password"
                            type="password"
                            className="signUp__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="200"
                            name="password"
                        />
                        <span id="error-pass" className="signUp__error"></span>
                    </fieldset>
                    <button className="signUp__button link" type="submit">
                        Зарегистрироваться
                    </button>
                </form>
                <p className="signUp__info">
                    Уже зарегистрированы?{' '}
                    <Link
                        to="/signin"
                        className="signUp__info signUp__info_color_blue link"
                    >
                        Войти
                    </Link>
                </p>
            </section>
        </main>
    );
}
