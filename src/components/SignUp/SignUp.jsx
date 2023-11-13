// Пользователь с таким email уже существует
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/HeaderLogo.svg';
import {validationConfig} from "../../utils/Constans"
import './SignUp.css';

export function SignUp({ onRegister, isWarning, checkedLoggedIn, setIsWarning }) {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const validateForm = () => {
        const errors = {};
        if (inputValues.name.length === 0) {
            errors.name = ''
        } else if (!/^[а-яА-ЯёЁa-zA-Z\s\-]+$/.test(inputValues.name)) {
            errors.name = validationConfig.nameRegExInvalidMessage;
        } else if ((inputValues.name.length < validationConfig.nameMinLength) || (inputValues.name.length > validationConfig.nameMaxLength)) {
            errors.name = validationConfig.nameLengthInvalidMesssage;
        } 
        if (!inputValues.email) {
            errors.email = '';
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(inputValues.email)) {
            errors.email = validationConfig.emailRegExInvalidMessage;
        }
        if (inputValues.password.length === 0) {
            errors.password = ''
        } else if ((inputValues.password.length < validationConfig.passwordMinLength)||(inputValues.password.length > validationConfig.passwordMaxLength)) {
            errors.password = validationConfig.passwordInvalidMessage;
        }
        setErrors(errors);
        return errors;
    };


    function validateButton() {
        if ((inputValues.name.length === 0) || (inputValues.name.length < 2) || (!/^[а-яА-ЯёЁa-zA-Z\s\\-]+$/.test(inputValues.name))) {
            setIsValid(false);
            return
        } else {
            setIsValid(true);
        }
        if ((!inputValues.email) || (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(inputValues.email))) {
            setIsValid(false);
            return
        } else {
            setIsValid(true);
        }
        if ((inputValues.password.length < validationConfig.passwordMinLength) || (inputValues.password.length > validationConfig.passwordMaxLength)) {
            setIsValid(false);
            return
        } else {
            setIsValid(true);
        }
    }

    const inputOnChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setInputValues({ ...inputValues, [name]: value });

    };
    useEffect(() => {
        setIsWarning(false)
        validateForm()
        validateButton()
    }, [inputValues]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsValid(validateForm())
        setErrors(validateForm());
        setIsWarning(false)
        onRegister(inputValues.name, inputValues.email, inputValues.password)
    };

    useEffect(() => {
        checkedLoggedIn()
    }, [])

    return (
            <main className="main">
                <section className="sign-up">
                    <Link to="/" rel=''>
                        <img className="sign-up__logo" src={logo} alt="Логотип" />
                    </Link>
                    <h1 className="sign-up__title">Добро пожаловать!</h1>
                        <form className="sign-up__form" name="form-register" noValidate
                            onSubmit={handleSubmit}
                        >
                            <fieldset className="sign-up__input-container" >
                                <label className="sign-up__text">Имя</label>
                                <input id="name" type="text" placeholder="Введите Ваше имя" name="name"
                                    className={`sign-up__input ${errors.name ? 'sign-up__input_error' : ' '}`}
                                    minLength="2"
                                    maxLength="30"
                                    value={inputValues.name || ""}
                                    onChange={inputOnChange}
                                    required
                                />
                                <span className="sign-up__error">{errors.name}</span>
                            </fieldset>

                            <fieldset className="sign-up__input-container">
                                <label className="sign-up__text">E-mail</label>
                                <input id="email" type="email" placeholder="Введите email" name="email"
                                    className={`sign-up__input ${errors.email ? 'sign-up__input_error' : ' '}`}
                                    value={inputValues.email || ""}
                                    onChange={inputOnChange}
                                    required
                                />
                                <span className="sign-up__error">{errors.email}</span>
                            </fieldset>
                            <fieldset className={`sign-up__input-container ${!isWarning ? 'sign-up__input-container_last' : 'sign-up__input-container_error'}`}>
                                <label className="sign-up__text">Пароль</label>
                                <input id="password" type="password" placeholder="Введите пароль" name="password"
                                    className={`sign-up__input ${errors.password ? 'sign-up__input_error' : ' '}`}
                                    minLength="5"
                                    maxLength="30"
                                    value={inputValues.password || ""}
                                    onChange={inputOnChange}
                                    required
                                />
                                <span className="sign-up__error">{errors.password}</span>
                            </fieldset>
                            <span className={`sign-up__warning ${!isWarning ? '' : 'sign-up__warning_active'}`}>
                                {validationConfig.serverInvalidMessage || validationConfig.uniqueMailInvalidMessage}
                            </span>
                            <button
                                type="submit"
                                className={`sign-up__button link ${!isValid || isWarning ? "sign-up__button_disabled" : ''}`}
                                disabled={!isValid || isWarning}
                            > 
                                Зарегистрироваться
                            </button>
                        </form>
                        <p className="sign-up__info">
                            Уже зарегистрированы?
                            <Link to="/signin" className="sign-up__link">
                                Войти
                            </Link>
                        </p>
                </section>
            </main >
    );
}