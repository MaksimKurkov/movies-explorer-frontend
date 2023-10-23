import '../AboutMe/AboutMe.css';
import AboutMeImage from '../../images/AbouteMeImg.png';

export function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe__title-container">
                <h3 className="aboutMe__title">Студент</h3>
            </div>
            <div className="aboutMe__content">
                <div className="aboutMe__text-container">
                    <h3 className="aboutMe__name">Максим</h3>
                    <p className="aboutMe__subtitle">
                        Фронтенд-разработчик, 23 года
                    </p>
                    <p className="aboutMe__text">
                        Я родился и живу в Воскресенске, закончил факультет
                        Информационной Безопасности в НИУ МЭИ. Я люблю слушать
                        музыку, занимаюсь спортом и немного киберспортсмен.
                        Недавно начал кодить. После окончания института решил
                        попробовать себя еще в чем-то, выбрал Web-разработку.
                        kkkkkkkkkkgggggggg
                    </p>
                    <button className="aboutMe__button">Github</button>
                </div>
                <img
                    className="aboutMe__img"
                    src={AboutMeImage}
                    alt="Личное фото"
                />
            </div>
        </section>
    );
}
