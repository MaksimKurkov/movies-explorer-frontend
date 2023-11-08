import './FormCheckBox.css';

export function FormCheckBox({ isCheck, checkboxClick }) {
    return (
        <div className="checkbox">
            <label className="checkbox__input-container">
                <input
                    type="checkbox"
                    className="checkbox__button"
                    onClick={checkboxClick}
                />
                <svg
                    className="checkbox__button-svg"
                    viewBox="0 0 36 20"
                    fill="none"
                >
                    <g id="smalltumber">
                        <rect
                            className={`checkbox__button-svg-rect ${
                                !isCheck
                                    ? 'checkbox__button-svg-rect_active'
                                    : ''
                            }`}
                            id="tumbler-on"
                            width="36"
                            height="20"
                            rx="10"
                            fill="#2BE080"
                        />
                        <circle
                            className={`checkbox__button-svg-circle ${
                                !isCheck
                                    ? 'checkbox__button-svg-circle_active'
                                    : ''
                            }`}
                            id="tumbler-on-2"
                            cx="26"
                            cy="10"
                            r="4"
                            fill="white"
                        />
                    </g>
                </svg>
            </label>
            <span className="checkbox__title">Короткометражки</span>
        </div>
    );
}
