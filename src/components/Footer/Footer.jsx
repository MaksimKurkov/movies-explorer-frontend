import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className="footer__container">
        <li className="footer__info"> ©2023</li>
        <li className="footer__info">
          <nav className="footer__nav">
            <ul className="footer__link-container">
              <li className="footer__link">
                <Link to="https://practicum.yandex.ru/" className="footer__button" target="_blank" rel=''>
                  Яндекс.Практикум
                </Link>
              </li>
              <li className="footer__link">
                <Link to="https://github.com/git-guides" className="footer__button" target="_blank" rel=''>
                  Github
                </Link>
              </li>
            </ul>
          </nav>
        </li>
      </ul>
    </footer>
  );
}