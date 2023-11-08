import './CheckedMovieButton.css';
export function CheckedMovieButton({ handleButtonClick }) {
    return (
        <button
            className="checked-movie-button link"
            onClick={handleButtonClick}
        ></button>
    );
}
