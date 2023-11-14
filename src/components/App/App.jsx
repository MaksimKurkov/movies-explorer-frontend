import './App.css';
import React, { useEffect, useState, useCallback } from 'react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Main } from "../Main/Main";
import { SignUp } from "../SignUp/SignUp";
import { SignIn } from "../SignIn/SignIn";
import { NotFound } from "../NotFound/NotFound";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from "../Profile/Profile";
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Footer } from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext/CurrentUserContext';
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import MainApi from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  // стейт статусa пользователя  
  const [loggedIn, setLoggedIn] = React.useState(false);
  // стейт контекст
  const [currentUser, setCurrentUser] = useState({});
  // стейт бокового меню
  const [burgerPopupOpen, setBurgerPopupOpen] = useState(false);

  // стейт загрузки
  const [savedMovies, setSavedMovies] = useState([]);
  const [isCheck, setIsCheck] = useState(true)
  const [isWarning, setIsWarning] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");

  useEffect(() => {
    loggedIn &&
      Promise.all([MainApi.getUserInfo(localStorage.token), MainApi.getMovie(localStorage.token)])
        .then(([dataUser, dataMovies]) => {
          setCurrentUser(dataUser);
          setSavedMovies(dataMovies);
          setLoggedIn(true);
          setIsCheck(false);
        })
        .catch((error) => {
          console.error(`Ошибка при начальных данный страницы ${error}`);
          setIsCheck(false);
          localStorage.clear()
        })
  }, [loggedIn]);


  //проверка токена
  useEffect(() => {
    getTokenCheck();
  }, [])

  const getTokenCheck = (token) => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      setLoggedIn(true);
      setIsCheck(false);
    }
    else {
      setLoggedIn(false);
      setIsCheck(false);
      localStorage.clear();
    }
  }

  //функция авторизации
  function handleLogin(email, password) {
    MainApi.authorize(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token)
        setLoggedIn(true)
        navigate('/movies', { replace: true });
      })
      .catch((error) => {
        console.error(`Ошибка при авторизации ${error}`)
        setIsWarning(true)
      })
  }


  function handleRegister(name, email, password) {
    MainApi
    .register(name, email, password)
    .then((res) => {
      if (res) {
        setLoggedIn(false)
        MainApi.authorize(email, password)
          .then(res => {
            localStorage.setItem('token', res.token)
            setLoggedIn(true)
            navigate('/movies')
          })
          .catch((error) => {
            console.error(`Ошибка при регистрации ${error}`)
            setIsWarning(true)
          })
      }
    })
    .catch((error) => {
      console.error(`Ошибка при регистрации ${error}`)
      setIsWarning(true)
    })
  }

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate("/");
    localStorage.clear();
  }

  //функция отображения данных Edit(описание)
  function handleUpdateUser(data) {
    MainApi
    .setUserInfo(data, localStorage.token)
    .then((data) => {
      setCurrentUser(data)
      setIsSuccess("Профиль успешно обновлен.");
      setIsWarning(false)
      setLoggedIn(true);
    })
    .catch((error) => {
      console.error(`Ошибка отправка формы с юзер данными (аватар) ${error}`)
      setIsWarning(true)
      setIsSuccess("")
    })
  }

  //Функция удаления
  function handleDeleteSubmit(deleteId) {
    MainApi
      .deleteMovie(deleteId, localStorage.token)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => {
          return movie._id !== deleteId
        }))
      })
      .catch((error) => console.error(`Ошибка удаления ${error}`));
  }

  //функция добавления карточки
  function handleAddSubmit(data) {
    const add = savedMovies.some(element => data.id === element.movieId)
    const seachMovie = savedMovies.find((movie) => {
      return movie.movieId === data.id
    })

    if (add) {
      handleDeleteSubmit(seachMovie._id);

    } else {
      MainApi
        .addMovie(data, localStorage.token)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
          console.log("добавления карточки успешно");
        })
        .catch((error) => console.error(`Ошибка лайка ${error}`));
    }
  }

  function handleBurgerPopupClick() {
    setBurgerPopupOpen(true);
  }

  const closeAllPopups = useCallback(() => {
      setBurgerPopupOpen(false);
  }, []);

  //Функция перенаправления авторизированных пользователей
  function checkedLoggedIn() {
    let isAuth = localStorage.getItem('token')
    if(isAuth !== null) {
      navigate("/");
    }
  }
  
  return (
    <div className='body'>
      <CurrentUserContext.Provider value={currentUser}>
        {isCheck ? <Preloader /> :
        <div className="page">
        <Routes>
          <Route path="/" element={<Main 
            loggedIn={loggedIn} 
            burgerClick={handleBurgerPopupClick}
            onClose={closeAllPopups}
            isOpen={burgerPopupOpen}
          />} 
          />
          <Route path="/signup" element={<SignUp 
            onRegister={handleRegister} 
            checkedLoggedIn={checkedLoggedIn} 
            isWarning={isWarning} 
            setIsWarning={setIsWarning} 
          />} 
          />
          <Route path="/signin" element={<SignIn 
            onLogin={handleLogin} 
            checkedLoggedIn={checkedLoggedIn} 
            isWarning={isWarning} 
            setIsWarning={setIsWarning} 
          />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/movies" element={<ProtectedRouteElement
            element={Movies}
            loggedIn={loggedIn}
            handleAddSubmit={handleAddSubmit}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            burgerClick={handleBurgerPopupClick}
            onClose={closeAllPopups}
            isOpen={burgerPopupOpen}
          />}
          />
          <Route path="/saved-movies" element={<ProtectedRouteElement
            element={SavedMovies}
            loggedIn={loggedIn}
            handleAddSubmit={handleAddSubmit}
            handleDeleteSubmit={handleDeleteSubmit}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            burgerClick={handleBurgerPopupClick}
            onClose={closeAllPopups}
            isOpen={burgerPopupOpen}
          />}
          />
          <Route path="/profile" element={<ProtectedRouteElement 
            element={Profile} 
            loggedIn={loggedIn} 
            signOut={signOut} 
            handleUpdateUser={handleUpdateUser} 
            isWarning={isWarning} 
            setIsWarning={setIsWarning}
            burgerClick={handleBurgerPopupClick}
            onClose={closeAllPopups}
            isOpen={burgerPopupOpen}
            isSuccess={isSuccess} 
            setIsSuccess={setIsSuccess}
            currentUser={currentUser}
          />} 
          />

        </Routes>
        {
          (location === "/" ||
          location === "/movies" ||
          location === "/saved-movies") && <Footer />
        }
        <BurgerMenu onClose={closeAllPopups} isOpen={burgerPopupOpen} />
      </div >
      }
    </CurrentUserContext.Provider>
    </div>
  )
}


export default App;

