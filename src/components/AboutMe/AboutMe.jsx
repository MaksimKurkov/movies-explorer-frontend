import { Link } from 'react-router-dom';
import './AboutMe.css';
import aboutMeImage from '../../images/AbouteMeImg.png';

export function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__title-container">
        <h2 className="about-me__title">Студент</h2>
      </div>
      <div className="about-me__content">
        <div className="about-me__text-container">
          <h3 className="about-me__name">Максим</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 23 года</p>
          <p className="about-me__text">
            Я родился и живу в Воскресенске, закончил факультет
            Информационной Безопасности в НИУ МЭИ. Я люблю слушать
            музыку, занимаюсь спортом и немного киберспортсмен.
            Недавно начал кодить. После окончания института решил
            попробовать себя еще в чем-то, выбрал Web-разработку.       
          </p>
          <Link className="about-me__button"
            to="https://github.com/MaksimKurkov"
            target="_blank"
          >
            Github
          </Link>
        </div>
        <img className="about-me__img"
          src={aboutMeImage}
          alt="Личное фото" 
        />
      </div>
    </section >
  );
}
