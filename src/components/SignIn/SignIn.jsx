import logo from '../../images/HeaderLogo.svg';
import { Link } from 'react-router-dom';
import '../SignIn/SignIn.css';

export function SignIn() {
    return (
        <main className='main'>
            <section className="signIn">
                <Link to="/">
                    <img src={logo} alt="Логотип" className="signIn__logo" />
                </Link>
                <h1 className="signIn__title">Рады видеть!</h1>
                <form method="post" className="signIn__form">
                    <fieldset className="signIn__input-container">
                        <p className="signIn__text">E-mail</p>
                        <input
                            id="email"
                            type="email"
                            className="signIn__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            name="email"
                        />
                        <span id="error-email" className="signIn__error"></span>
                    </fieldset>
                    <fieldset className="signIn__input-container">
                        <p className="signIn__text">Пароль</p>
                        <input
                            id="password"
                            type="password"
                            className="signIn__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="200"
                            name="password"
                        />
                        <span id="error-pass" className="signIn__error"></span>
                    </fieldset>
                    <button className="signIn__button link" type="submit">
                        Войти
                    </button>
                </form>
                <p className="signIn__info">
                    Еще не зарегистрированы?{' '}
                    <Link
                        to="/signup"
                        className="signIn__info signIn__info_color_blue link"
                    >
                        Регистрация
                    </Link>
                </p>
            </section>
        </main>
    );
}