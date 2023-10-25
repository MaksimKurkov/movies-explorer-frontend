import '../NotFound/NotFound.css';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../images/404.png';

export function NotFound() {
    return (
        <main className='main'>
            <section className="notFound">
                <img src={NotFoundImg} alt="404" className="notFound__img" />
                <p className="notFound__text">Страница не найдена</p>
                <Link to="/signin" className="notFound__link link">
                    Назад
                </Link>
            </section>
        </main>
    );
}
