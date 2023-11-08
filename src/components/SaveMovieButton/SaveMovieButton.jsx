import './SaveMovieButton.css';

export function SaveMovieButton({ handleButtonClick }) {
    return (
        <button className="save-movie-button link" onClick={handleButtonClick}>
            Сохранить
        </button>
    );
}
