import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';
import cardImageTest from '../../images/CardTest.png';
import { CheckedMovieButton } from '../CheckedMovieButton/CheckedMovieButton';
import { SaveMovieButton } from '../SaveMovieButton/SaveMovieButton';
import { DeleteMovieButton } from '../DeleteMovieButton/DeleteMovieButton';
import { useState } from 'react';

export function MoviesCard() {
    const [isCheck, setIsCheck] = useState(false);
    const location = useLocation();
    const changeButton = location.pathname !== '/saved-movies';

    function handleButtonClick() {
        if (isCheck === true) {
            setIsCheck(false);
        } else {
            setIsCheck(true);
        }
    }

    return (
        <li className="movies-card">
            <article className="movies-card__content">
                <div className="movies-card__title-container">
                    <Link className="movies-card__title">
                        В погоне за Бенкси
                    </Link>
                    <p className="movies-card__duration">0ч 42м</p>
                </div>
                <div className="movies-card__container">
                    <Link>
                        <img
                            src={cardImageTest}
                            alt="Изображение фильма"
                            className="movies-card__image"
                        />
                    </Link>
                    {changeButton ? (
                        isCheck ? (
                            <CheckedMovieButton
                                handleButtonClick={handleButtonClick}
                            />
                        ) : (
                            <SaveMovieButton
                                handleButtonClick={handleButtonClick}
                            />
                        )
                    ) : (
                        <DeleteMovieButton />
                    )}
                </div>
            </article>
        </li>
    );
}
