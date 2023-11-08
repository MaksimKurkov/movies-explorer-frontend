import './SearchForm.css';
import { FormCheckBox } from '../FormCheckBox/FormCheckBox';

export function SearchForm({ isCheck, checkboxClick }) {
    return (
        <section className="search-form">
            <form method="post" className="search-form__form">
                <fieldset className="search-form__input-container">
                    <input
                        id="movies"
                        type="text"
                        className="search-form__input"
                        autoComplete="off"
                        required
                        minLength="2"
                        maxLength="40"
                        placeholder="Фильм"
                        name="movies"
                    />
                    <button className="search-form__button link" type="submit">
                        Поиск
                    </button>
                </fieldset>
                <FormCheckBox isCheck={isCheck} checkboxClick={checkboxClick}/>
            </form>
        </section>
    );
}
