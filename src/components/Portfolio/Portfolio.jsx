import './Portfolio.css';
import { Link } from 'react-router-dom';
import  strelka  from '../../images/PortfolioButton.svg';

export function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__container">
                <li className="portfolio__link-container">
                    <Link
                        to="https://github.com/MaksimKurkov/how-to-learn"
                        className="portfolio__link link"
                        target="_blank"
                    >
                        <p className="portfolio__subtitle">Статичный сайт</p>
                        <img className="portfolio__strelka" alt="стрелка" src={strelka} />
                    </Link>
                </li>
                <li className="portfolio__link-container">
                    <Link
                        to="https://github.com/MaksimKurkov/russian-travel"
                        className="portfolio__link link"
                        target="_blank"
                    >
                        <p className="portfolio__subtitle">Адаптивный сайт</p>
                        <img className="portfolio__strelka" alt="стрелка" src={strelka} />
                    </Link>
                </li>
                <li className="portfolio__link-container">
                    <Link
                        to="https://github.com/MaksimKurkov/react-mesto-api-full-gha"
                        className="portfolio__link link"
                        target="_blank"
                    >
                        <p className="portfolio__subtitle">Одностраничное приложение</p>
                        <img className="portfolio__strelka" alt="стрелка" src={strelka} />
                    </Link>
                </li>
            </ul>
        </section >
    )
}
