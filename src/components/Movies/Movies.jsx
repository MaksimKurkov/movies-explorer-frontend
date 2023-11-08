import { useState } from 'react';
import { HeaderAuth } from '../HeaderAuth/HeaderAuth';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './Movies.css';

export function Movies({ burgerClick }) {
    const [isCheck, setIsCheck] = useState(false);

    function checkboxClick() {
        if (isCheck === true) {
            setIsCheck(false);
        } else {
            setIsCheck(true);
        }
    }

    return (
        <>
            <HeaderAuth burgerClick={burgerClick} auth="auth" />
            <main className="main">
                <SearchForm isCheck={isCheck} checkboxClick={checkboxClick} />
                <MoviesCardList />
            </main>
        </>
    );
}
