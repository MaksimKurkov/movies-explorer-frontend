import './Profile.css';
import { useState, useEffect, useContext} from "react";
import { HeaderAuth } from '../HeaderAuth/HeaderAuth.jsx';
import { CurrentUserContext } from "../../contexts/CurrentUserContext/CurrentUserContext.js"
import { validationConfig } from '../../utils/Constans.js';


export function Profile({ signOut, handleUpdateUser, isWarning, setIsWarning, burgerClick }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isChanging, setIsChanging] = useState(false);

    const validateForm = () => {
        if (name.length < 2) {
            setErrorName(validationConfig.nameLengthInvalidMesssage)
        } else if (!/^[а-яА-ЯёЁa-zA-Z\\s\\-]+$/.test(name)) {
            setErrorName(validationConfig.nameRegExInvalidMessage)
        } else {
            setErrorName('')
        }
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            setErrorEmail(validationConfig.emailRegExInvalidMessage)
        } else {
            setErrorEmail('')
        }
        if ((name.length < 2) || (!/^[а-яА-ЯёЁa-zA-Z\\s\\-]+$/.test(name)) || 
            (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) || ((name === currentUser.name) && (email === currentUser.email))) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    };

    function handleNameChange(evt) {
        const target = evt.target;
        const value = target.value;
        setName(value);
        validateForm();
    }

    function handleEmailChange(evt) {
        const target = evt.target;
        const value = target.value;
        setEmail(value);
        validateForm();
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        validateForm() 
        setIsWarning(false)
        handleUpdateUser({ name, email })
        console.log("handleSubmit");
        setIsChanging(false);
    };

    function changeStatus() {
        setIsChanging(true);
    }

    useEffect(() => {
        validateForm()
    }, [name, email]);

    return (
        <>
            <HeaderAuth burgerClick={burgerClick}/>
            <main className="main">
                <section className="profile">
                    <h1 className="profile__user-name">{`Привет, ${currentUser.name}!`}</h1>
                    <form className={`profile__form ${isChanging ? "profile__form_change" : ''}`} name="form-profile" noValidate onSubmit={handleSubmit}>
                        <fieldset className="profile__input-container">
                            <label className="profile__input-name">Имя</label>
                            {!isChanging ? (
                                <input id="name" type="text" placeholder="" name="name"
                                className="profile__input profile__input_type_border"
                                value={name || ''}
                                readOnly
                                />
                            ):(
                                <input id="name" type="text" placeholder="" name="name"
                                    className="profile__input profile__input_type_border"
                                    value={name || ''}
                                    onChange={handleNameChange}
                                    required
                                />
                            )}
                        </fieldset>  
                        <span className="profile__input-error">{errorName}</span>  
                        <span className="profile__input-border"></span>  
                        <fieldset className="profile__input-container">
                            <label className="profile__input-name">E-mail</label>
                            {!isChanging ? (
                                <input id="email" type="email" placeholder=" " name="email"
                                    className="profile__input"
                                    value={email || ''}
                                    readOnly
                                />
                            ) : (
                                <input id="email" type="email" placeholder=" " name="email"
                                className="profile__input"
                                value={email || ''}
                                onChange={handleEmailChange}
                                required 
                            /> 
                            )}
                        </fieldset>  
                        <span className="profile__input-error">{errorEmail}</span>
                        <span className={`profile__errors ${!isWarning ? '' : 'profile__errors_active'}`}>
                            { validationConfig.updateProfileErrorMessage || validationConfig.uniqueMailInvalidMessage}
                        </span>
                        <div className={`${isChanging ? "profile__save" : 'profile__save_hide'}`}>
                            <button
                                    type="submit"
                                    className={`profile__save-button link ${!isValid ? "profile__save-button_disabled" : ''}`}
                                    disabled={!isValid}
                            > 
                                Сохранить
                            </button>
                        </div>
                    </form>
                    <button 
                        className={`button profile__button-edit link ${isChanging ? "profile__button-edit_hide" : ''}`}
                        onClick={changeStatus}
                    >
                         Редактировать
                    </button>
                    <button className={`button profile__button-exit link ${isChanging ? "profile__button-exit_hide" : ''}`} onClick={signOut} > 
                        Выйти из аккаунта
                    </button>
                </section>
            </main>
        </>
    );
}