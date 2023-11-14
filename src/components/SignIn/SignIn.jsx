import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/HeaderLogo.svg';
import './SignIn.css';
import {validationConfig} from "../../utils/Constans"

export function SignIn({ onLogin, isWarning, checkedLoggedIn, setIsWarning }) {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);

    const validateForm = () => {
        const errors = {};
        if (!inputValues.email) {
            errors.email = '';
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(inputValues.email)) {
            errors.email = validationConfig.emailRegExInvalidMessage;
        }
        if (inputValues.password.length === 0) {
            errors.password = ''
        } else if (inputValues.password.length < validationConfig.passwordMinLength || inputValues.password.length > validationConfig.passwordMaxLength) {
            errors.password = validationConfig.passwordInvalidMessage;
        }
        setErrors(errors);
        return errors;
    };

    function validateButton() {   
        if ((!inputValues.email) || (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(inputValues.email))) {
            setIsValid(false)
            return
        } else {
            setIsValid(true)
        }
        if ((inputValues.password.length < validationConfig.passwordMinLength) || (inputValues.password.length > validationConfig.passwordMaxLength)) {
            setIsValid(false)
            return
        } else {
            setIsValid(true)
        }
    }

    const inputOnChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setInputValues({ ...inputValues, [name]: value });
    };
    useEffect(() => {
        setIsWarning(false);
        setDisableSubmitBtn(false);
        validateForm();
        validateButton();
    }, [inputValues]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsValid(validateForm());
        setErrors(validateForm());
        setDisableSubmitBtn(true);
        setIsWarning(false);
        onLogin(inputValues.email, inputValues.password);
    };

    useEffect(() => {
        checkedLoggedIn()
    }, [])

    return (
        <>
            <main className="main">
                <section className="sign-in">
                    <Link to="/" rel=''>
                        <img className="sign-in__logo" src={logo} alt="Логотип" />
                    </Link>
                    <h1 className="sign-in__title">Рады видеть!</h1>
                    <form className="sign-in__form" name="form-login" onSubmit={handleSubmit} noValidate>
                        <fieldset className="sign-in__input-container">
                            <label className="sign-in__text">E-mail</label>
                            <input id="email" type="email" placeholder="Введите E-mail" name="email"
                                className="sign-in__input"
                                value={inputValues.email || ""}
                                onChange={inputOnChange}
                                required />
                            <span className={`sign-in__error ${errors.email ? 'sign-in__error_active' : ''}`}>{errors.email}
                            </span>
                        </fieldset>
                        <fieldset className={`sign-in__input-container ${!isWarning ? 'sign-in__input-container_last' : 'sign-in__input-container_error'}`}>
                            <label className="sign-in__text">Пароль</label>
                            <input id="password" type="password" placeholder="Введите пароль" name="password"
                                className="sign-in__input"
                                value={inputValues.password || ""}
                                onChange={inputOnChange}
                                required />
                            <span className={`sign-in__error ${errors.password ? 'sign-in__error_active' : ''}`}>{errors.password}
                            </span>
                        </fieldset>
                        <span className={`sign-in__warning ${!isWarning ? '' : 'sign-in__warning_active'}`}>
                            {validationConfig.authInvalidMessage || validationConfig.tokenDeliveryErrorMessage || validationConfig.tokenInvaldMessage}
                        </span>
                        <button 
                            type="submit"
                            className={`sign-in__button link ${!isValid || isWarning ? "sign-in__button_disabled" : ''}`}
                            disabled={!isValid || isWarning || disableSubmitBtn}
                        > 
                            Войти
                        </button>
                    </form>
                        <p className="sign-in__info">
                            Ещё не зарегистрированы?
                            <Link
                                to="/signup"
                                className="sign-in__link"
                            >
                                Регистрация
                            </Link>
                        </p>
                </section>
            </main>
        </>
    );
}