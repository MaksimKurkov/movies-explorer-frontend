import './Profile.css';
import { useState, useEffect, useContext} from "react";
import { HeaderAuth } from '../HeaderAuth/HeaderAuth.jsx';
import { CurrentUserContext } from "../../contexts/CurrentUserContext/CurrentUserContext.js"
import { validationConfig } from '../../utils/Constans.js';

export function Profile({ signOut, handleUpdateUser, isWarning, setIsWarning, burgerClick, setIsSuccess, isSuccess, isFetching }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isChanging, setIsChanging] = useState(false);
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);

    const validateForm = () => {
        if (name.length < 2) {
            setErrorName(validationConfig.nameLengthInvalidMesssage)
        } else if (!/^[а-яА-ЯёЁa-zA-Z\s\\-]+$/.test(name)) {
            setErrorName(validationConfig.nameRegExInvalidMessage)
        } else {
            setErrorName('')
        }
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            setErrorEmail(validationConfig.emailRegExInvalidMessage)
        } else {
            setErrorEmail('')
        }
        if ((name.length < 2) || (!/^[а-яА-ЯёЁa-zA-Z\s\\-]+$/.test(name)) || 
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
        setIsSuccess("");
    }

    function handleEmailChange(evt) {
        const target = evt.target;
        const value = target.value;
        setEmail(value);
        validateForm();
        setIsSuccess("");
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        validateForm() 
        setIsWarning(false)
        handleUpdateUser({ name, email })
        setIsChanging(false);
        setDisableSubmitBtn(true);
    };

    function changeStatus() {
        setIsSuccess("");
        setIsChanging(true);
    }

    useEffect(() => {
        setIsWarning(false);
        setDisableSubmitBtn(false);
        setIsSuccess("");
        validateForm();
    }, [name, email]);

    return (
        <>
            <HeaderAuth burgerClick={burgerClick}/>
            <main className="main">
                <section className="profile">
                    <h1 className="profile__user-name">{`Привет, ${currentUser.name}!`}</h1>
                    <form className="profile__form"  name="form-profile" noValidate onSubmit={handleSubmit}>
                        <div className="profile__input-content">
                        <fieldset className="profile__input-container">
                            <label className="profile__input-name">Имя</label>
                            <input id="name" type="text" placeholder="" name="name"
                                className="profile__input profile__input_type_border"
                                value={name || ''}
                                onChange={handleNameChange}
                                required
                                readOnly={(!isChanging || isFetching)} 
                            />
                        </fieldset>  
                        <span className="profile__input-error">{errorName}</span>  
                        <span className="profile__input-border"></span>  
                        <fieldset className="profile__input-container">
                            <label className="profile__input-name">E-mail</label>
                            <input id="email" type="email" placeholder=" " name="email"
                                className="profile__input"
                                value={email || ''}
                                onChange={handleEmailChange}
                                required
                                readOnly={(!isChanging || isFetching)} 
                            /> 
                        </fieldset>
                        <span className="profile__input-error">{errorEmail}</span>  
                        </div>
                        <div className='profile__global-errors'>
                            <span className={`profile__errors ${isWarning && !isChanging? 'profile__errors_active' : ''}`}>
                                { validationConfig.updateProfileErrorMessage || validationConfig.uniqueMailInvalidMessage}
                            </span>
                            < span className={`profile__errors ${!isWarning && !isChanging? 'profile__errors_success' : ''}`}>
                                    {isSuccess}
                            </span>
                        </div>
                        {(isChanging || isFetching ) ? (
                            <div className="profile__save">
                            <button
                                    type="submit"
                                    className={`profile__save-button link ${!isValid || disableSubmitBtn ? "profile__save-button_disabled" : ''}`}
                                    disabled={!isValid || isWarning || disableSubmitBtn || isFetching}
                            > 
                                {isFetching ? "Сохранение..." : "Сохранить"}
                            </button>
                        </div>
                        ) : ('')
                        }
                    </form>
                    {(isChanging || isFetching ) ? ('') : (
                    <>
                        <button 
                            className="button profile__button-edit link"
                            onClick={changeStatus}
                        >
                            Редактировать
                        </button>
                        <button className="button profile__button-exit link" onClick={signOut} > 
                            Выйти из аккаунта
                        </button>
                    </>
                    )}
                    
                </section>
            </main>
        </>
    );
}