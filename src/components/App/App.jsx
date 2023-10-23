import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Main } from '../Main/Main.jsx';
import { SignIn } from '../SignIn/SignIn';
import { SignUp } from '../SignUp/SignUp';
import { NotFound } from '../NotFound/NotFound';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Footer } from '../Footer/Footer';

import { useCallback, useState } from 'react';

function App() {
    const [loggedIn, setLoggedIn] = useState(true);
    const location = useLocation().pathname;
    const [burgerPopupOpen, setBurgerPopupOpen] = useState(false);

    function handleBurgerPopupClick() {
        setBurgerPopupOpen(true);
    }

    const closeAllPopups = useCallback(() => {
        setBurgerPopupOpen(false);
    }, []);

    return (
        <div className="body">
            <div className="page">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main
                                loggedIn={loggedIn}
                                burgerClick={handleBurgerPopupClick}
                            />
                        }
                    />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/movies"
                        element={
                            <Movies
                                burgerClick={handleBurgerPopupClick}
                                onClose={closeAllPopups}
                                isOpen={burgerPopupOpen}
                            />
                        }
                    />
                    <Route
                        path="/saved-movies"
                        element={
                            <SavedMovies
                                burgerClick={handleBurgerPopupClick}
                                onClose={closeAllPopups}
                                isOpen={burgerPopupOpen}
                            />
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <Profile
                                burgerClick={handleBurgerPopupClick}
                                onClose={closeAllPopups}
                                isOpen={burgerPopupOpen}
                            />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {(location === "/" ||
                    location === "/movies" ||
                    location === "/saved-movies") && <Footer />}
            </div>
            <BurgerMenu onClose={closeAllPopups} isOpen={burgerPopupOpen} />
        </div>
    );
}

export default App;
