import '../AboutProject/AboutProject.css';

export function AboutProject() {
    return (
        <section className="aboutProject">
            <div className="aboutProject__title-container">
                <h3 className="aboutProject__title">О проекте</h3>
            </div>
            <div className="aboutProject__info-container">
                <div className="aboutProject__text-box">
                    <h3 className="aboutProject__info-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="aboutProject__info-text">
                        Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="aboutProject__text-box">
                    <h3 className="aboutProject__info-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="aboutProject__info-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые
                        нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="aboutProject__time-container">
                <div className="aboutProject__time aboutProject__time_color_green">
                    <p className="aboutProject__time-text">1 неделя</p>
                </div>
                <div className="aboutProject__time">
                    <p className="aboutProject__time-text">4 недели</p>
                </div>
                <p className="aboutProject__time-sign">Back-end</p>
                <p className="aboutProject__time-sign">Front-end</p>
            </div>
        </section>
    );
}
