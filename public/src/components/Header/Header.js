import { Component } from "react";

import "./Header.scss";

class Header extends Component {
    render() {
        return(
            <header className="header">
                <a href="/#" className="header__logo">Logo</a>

                <ul className="header__list">
                    <li className="header__item"><a href="/#" className="header__link header__link_active">Главная</a></li>
                    <li className="header__item"><a href="/#" className="header__link">О нас</a></li>
                    <li className="header__item"><a href="/#" className="header__link">Музыка</a></li>
                    <li className="header__item"><a href="/#" className="header__link">Контакты</a></li>
                </ul>
                <span className="header__menu material-icons">menu</span>
            </header>
        );
    }
}

export default Header;