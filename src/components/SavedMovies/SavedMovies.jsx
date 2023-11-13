import React, { useState, useEffect } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { HeaderAuth } from '../HeaderAuth/HeaderAuth';
import SearchForm from '../SearchForm/SearchForm';

export function SavedMovies({ savedMovies, setSavedFilteredMovies, handleAddSubmit, handleDeleteSubmit, setSavedMovies, filtredSavedMovie, searchFilmsSaved, burgerClick }) {
  const [filterMovies, setFilterMovies] = useState(savedMovies)
  const [isSearch, setIsSearch] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [firstSearch, setFirstSearch] = useState(true)

  const filtredMovie = ((isSearch, isCheck, savedMovies) => {
    setIsSearch(isSearch)
    setFilterMovies(savedMovies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(isSearch.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(isSearch.toLowerCase());
      return isCheck ? (searchName && movie.duration <= 40) : searchName
    }))
  })

  function searchFilms(search) {
    filtredMovie(isSearch, isCheck, savedMovies)
  }

  useEffect(() => {
    filtredMovie(isSearch, isCheck, savedMovies)
  }, [isSearch, isCheck, savedMovies])


  function changeCheck() {
    if (isCheck) {
      setIsCheck(false)
      setFirstSearch(false)
      filtredMovie(isSearch, false, savedMovies)
    } else {
      setIsCheck(true)
      setFirstSearch(false)
      filtredMovie(isSearch, true, savedMovies)
    }
  }

  return (
    <>
      <HeaderAuth burgerClick={burgerClick}/>
      <main className="main">
        <SearchForm
          searchFilms={searchFilms}
          changeCheck={changeCheck}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
          handleAddSubmit={handleAddSubmit}
          handleDeleteSubmit={handleDeleteSubmit}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          searchFilmsSaved={searchFilmsSaved}
          filtredSavedMovie={filtredSavedMovie}
          setSavedFilteredMovies={setSavedFilteredMovies}
          isSaved={true}
          isCheck={isCheck}
        />
        < MoviesCardList
          filterMovies={filterMovies}
          handleDeleteSubmit={handleDeleteSubmit}
          handleAddSubmit={handleAddSubmit}
          isSaved={true}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          firstSearch={firstSearch}
        />
      </main>
    </>
  )
}