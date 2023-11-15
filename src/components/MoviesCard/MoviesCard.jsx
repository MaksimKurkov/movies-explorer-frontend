import { Link } from 'react-router-dom';
import {durationToHours} from "../../utils/Utils";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

export default function MoviesCard({ movie, savedMovies, handleAddSubmit, handleDeleteSubmit }) {
    const isSaved = savedMovies.some((i) => i.movieId === movie.id);
    const movieSavedButtonClassName = `${isSaved ? 'movies__saved-button' : 'movies__save-button'}`;
    const {pathname} = useLocation();

    function handleMovieSaved() {
        if (isSaved) {
            var _movie = savedMovies.find(item => item.movieId === movie.id)
            handleDeleteSubmit(_movie._id);
        } else {
            handleAddSubmit(movie);
        }
    }

    function handleMovieDelete() {
        handleDeleteSubmit(movie._id)
    }

    return (
        <li className="movies-card">
            <article className="movies-card__content">
                <div className="movies-card__title-container">
                    <h2 className="movies-card__title">{movie.nameRU}</h2>
                    <span className="movies-card__duration">{durationToHours(movie.duration)}</span>
                </div>
                <div className="movies-card__container">
                    <Link to={movie.trailerLink} target='_blank'>
                        <img
                            src={pathname === "/movies" ? 
                            `https://api.nomoreparties.co${movie.image.url}` :
                            movie.image
                        }
                            alt="Изображение фильма"
                            className="movies-card__image"
                        />
                    </Link>
                    {pathname === "/movies" ? (
                        <button
                        className={movieSavedButtonClassName}
                        type="button"
                        onClick={handleMovieSaved}
                    >
                        Сохранить
                    </button>
                    ) : (
                    <button 
                        className="movies__delete-button"
                        type="button"
                        onClick={() => handleMovieDelete(movie._id)}
                    /> 
                    )}
                </div>
            </article >
        </li>
    )
}