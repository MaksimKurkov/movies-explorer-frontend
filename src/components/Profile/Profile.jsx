import './Profile.css';
import { HeaderAuth } from '../HeaderAuth/HeaderAuth';
import { Link } from 'react-router-dom';

export function Profile({ burgerClick }) {
    return (
        <>
            <HeaderAuth burgerClick={burgerClick} auth="auth" />
            <main className='main'>
                <section className="profile">
                    <h1 className="profile__userName">Привет, Виталий!</h1>
                    <form method="post" className="profile__form">
                        <fieldset className="profile__input-container">
                            <p className="profile__input-name">Имя</p>
                            <input
                                type="text"
                                name="name"
                                autoComplete="off"
                                required
                                minLength="2"
                                maxLength="40"
                                className="profile__input profile__input_type_border"
                            />
                            <span id="error-name" className="profile__error"></span>
                        </fieldset>
                        <span className="profile__input-border"></span>
                        <fieldset className="profile__input-container">
                            <p className="profile__input-name">E-mail</p>
                            <input
                                type="text"
                                name="e-mail"
                                autoComplete="off"
                                required
                                minLength="2"
                                maxLength="40"
                                className="profile__input"
                            />
                            <span
                                id="error-email"
                                className="profile__error"
                            ></span>
                        </fieldset>
                    </form>
                    <button className="button profile__button-edit link">
                        Редактировать
                    </button>
                    <Link to="/" className="button profile__button-exit link">
                        Выйти из аккаунта
                    </Link>
                </section>
            </main>
        </>
    );
}
