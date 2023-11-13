import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {durationToHours} from "../../utils/Utils";
import './MoviesCard.css';

export default function MoviesCard({ movie,savedMovies, handleAddSubmit, handleDeleteSubmit, isSaved }) {
    const [isLike, setIsLike] = useState(false);
    useEffect(() => {
        const isLiked = savedMovies.some((element => movie.id === element.movieId));
        setIsLike(isLiked);
    }, [savedMovies]);

    function onClick() {
        if (savedMovies.some(element => movie.id === element.movieId)) {
            setIsLike(false)
            handleAddSubmit(movie)
        } else {
            setIsLike(true)
            handleAddSubmit(movie)
        }
        setIsLike(!isLike);
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
                            src={
                                !isSaved ?
                                    `https://api.nomoreparties.co${movie.image.url}` :
                                    movie.image
                            }
                            alt="Изображение фильма"
                            className="movies-card__image"
                        />
                    </Link>
                    {isSaved ? (
                        <button className="movies__delete-button"
                            onClick={() => handleDeleteSubmit(movie._id)}
                        />
                    ) : (
                        <button
                            className={
                                !isLike
                                    ? `movies__save-button`
                                    : `movies__saved-button`
                            }
                            type="button"
                            aria-label="Значок лайк"
                            onClick={onClick}
                        >Сохранить</button>
                    )}
                </div>
            </article >
        </li>
    )
}