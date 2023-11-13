import { useState } from "react";
import './SearchForm.css';
import { FormCheckBox } from '../FormCheckBox/FormCheckBox';

export default function SearchForm({ searchFilms, allMovies, isCheck, setIsCheck, setIsSearch, isSearch, filtredMovie, setFilterMovies, changeCheck }) {
  const [errors, setErrors] = useState("");

  function handleSubmitSearch(evt) {
    setIsSearch(evt.target.value)
  }

  const handelCheckbox = () => {
    setIsCheck(!isCheck);
  }

  // функция события (нажатие на кнопку "поиск") для поиска фильмов
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isSearch.length < 1 ) {
      setErrors("Нужно ввести ключевое слово");
      return
    } else {
      searchFilms(isSearch);
      setErrors("");
    }
  }


  return (
    <section className="search-form">
      <form className="search-form__form" name="form-search" onSubmit={handleSubmit} noValidate="">
        <fieldset className="search-form__input-container">
          <input 
            className="search-form__input" 
            id="search" 
            type="text" 
            placeholder="Фильм" 
            name="search"
            value={isSearch || ""}
            onChange={handleSubmitSearch}
          />
          <button type="submit" className="search-form__button link">
            Поиск
          </button>
        </fieldset>
        <span className={`search-form__error ${errors ? 'search-form__error_active' : ''}`}>{errors}
        </span>
        <FormCheckBox isCheck={isCheck} setIsCheck={setIsCheck} allMovies={allMovies} filtredMovie={filtredMovie} handelCheckbox={handelCheckbox} setFilterMovies={setFilterMovies} changeCheck={changeCheck} />
      </form>
    </section>
  );
}




