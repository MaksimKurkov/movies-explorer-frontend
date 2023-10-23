import '../CheckedMovieButton/CheckedMovieButton.css';
export function CheckedMovieButton({ handleButtonClick }) {
    return (
        <button
            className="checkedMovieButton link"
            onClick={handleButtonClick}
        ></button>
    );
}
