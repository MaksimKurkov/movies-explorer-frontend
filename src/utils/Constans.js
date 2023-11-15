
export const validationConfig = {
  nameRegExInvalidMessage: 'Допустимы: латиница, кириллица, пробел или дефис',
  nameLengthInvalidMesssage: 'Имя должно содержать от 2 до 30 символов.',
  nameMinLength: 2,
  nameMaxLength: 30,
  emailRegExInvalidMessage: 'Некорректный email',
  passwordInvalidMessage: 'Некорректный пароль',
  passwordMinLength: 3,
  passwordMaxLength: 30,
  serverInvalidMessage: "При регистрации пользователя произошла ошибка.",
  uniqueMailInvalidMessage: "Пользователь с таким email уже существует.",
  authInvalidMessage: "Вы ввели неправильный логин или пароль",
  tokenDeliveryErrorMessage: "При авторизации произошла ошибка. Токен не передан или передан не в том формате",
  tokenInvaldMessage: "При авторизации произошла ошибка. Переданный токен некорректен.",
  updateProfileErrorMessage: "При обновлении профиля произошла ошибка.."
}

export const shortFilms = 40

// Разрешения экрана
export const screenS =320
export const screenM = 631
export const screenB = 1100

//  отображаемые карточки для 1280
export const cardsScreenB = 12;
// количество добавляемых карточек для 1280
export const addCardsScreenB = 3;


//  отображаемые карточки для 768
export const cardsScreenM = 8;
// количество добавляемых карточек для 768
export const addCardsScreenM = 2;


//  отображаемые карточки для 320
export const cardsScreenS = 5;
// количество добавляемых карточек для 320
export const addCardsScreenS = 2;