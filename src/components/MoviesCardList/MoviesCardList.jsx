import React, { useState, useEffect, useCallback } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { screenB, screenM, screenS, cardsScreenB, cardsScreenS, cardsScreenM, addCardsScreenB, addCardsScreenM, addCardsScreenS } from '../../utils/Constans';
import { useResize } from "../../utils/Utils";
import Preloader from "../Preloader/Preloader";


export default function MoviesCardList({ filterMovies, handleAddSubmit, handleDeleteSubmit, savedMovies, setSavedMovies, isLoading, firstSearch, firstSearcSaved}) {
    const { width } = useResize();
    const [page, setPage] = useState(1);

    const changeMovies = useCallback(() => {
        if (width >= screenB) {
            setPage(cardsScreenB);
        }
        else if (width >= screenM) {
            setPage(cardsScreenM);
        }
        else if (width >= screenS) {
            setPage(cardsScreenS);
        }
        else {
            setPage(cardsScreenS);
        }
    });
    useEffect(() => {
        changeMovies()
    }, [filterMovies, width]);

    useEffect(() => {
        window.addEventListener("resize", changeMovies);
        return () => {
            window.removeEventListener("resize", changeMovies);
        }
    }, [filterMovies, changeMovies]);

    const onClick = () => {
        if (width >= screenB) {
            setPage(page + addCardsScreenB);
        } else if (width >= screenM) {
            setPage(page + addCardsScreenM);
        } else if (width >= screenS) {
            setPage(page + addCardsScreenS);
        }
        else {
            setPage(page + addCardsScreenS);
        }
    };

    return (
        <section className="movies-card-list">
            {isLoading ? <Preloader /> :
                filterMovies.length !== 0 ? (
                    <ul className="movies-card-list__catalog">
                        {
                            (filterMovies.slice(0, page).map((movie) => (
                                <MoviesCard
                                    key={movie.id || movie._id}
                                    movie={movie}
                                    savedMovies={savedMovies}
                                    handleAddSubmit={handleAddSubmit}
                                    handleDeleteSubmit={handleDeleteSubmit}
                                    setSavedMovies={setSavedMovies} />
                            )))
                        }

                    </ul>
                ) : <div className="movies-card-list__container-error">
                    {firstSearch ? 
                    (<p className="movies-card-list__error">Ничего не найдено</p>
                    ) : firstSearcSaved ? 
                    (<p className="movies-card-list__error">Нет сохраненных фильмов</p>) 
                    : ('')}
                </div>
                
            }
                {
                    page < filterMovies.length && (
                        <button className="movies-card-list__button link" type="button"
                            onClick={onClick}
                        >Ещё </button>
                    )
                }
        </section >
    )
}