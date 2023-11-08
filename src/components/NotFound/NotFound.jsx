import './NotFound.css';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404.png';

export function NotFound() {
    return (
        <main className='main'>
            <section className="not-found">
                <img src={notFoundImg} alt="404" className="not-found__img" />
                <p className="not-found__text">Страница не найдена</p>
                <Link to="/signin" className="not-found__link link">
                    Назад
                </Link>
            </section>
        </main>
    );
}
