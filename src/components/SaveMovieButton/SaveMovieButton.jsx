import './SaveMovieButton.css';
export function SaveMovieButton({ handleButtonClick }) {
    return (
        <button className="saveMovieButton link" onClick={handleButtonClick}>
            Сохранить
        </button>
    );
}
