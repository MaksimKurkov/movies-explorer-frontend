import Header from '../Header/Header';
import { HeaderAuth } from '../HeaderAuth/HeaderAuth';
import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import { Portfolio } from '../Portfolio/Portfolio';
import './Main.css';

export function Main({ loggedIn, burgerClick }) {
    return (
        <>
            {loggedIn ? <HeaderAuth burgerClick={burgerClick} /> : <Header />}
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
        </>
    );
}
