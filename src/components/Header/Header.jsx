import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import HeaderLanguage from "../HeaderLanguage/HeaderLanguage";

import "./Header.scss";

function Header() {
    const {t, i18n} = useTranslation();

    return(
        <header className="header">
            <Link to="/" className="header__logo">{t("HEADER.LOGO")}</Link>
            {/* <a href="/#" className="header__logo">{t("HEADER.LOGO")}</a> */}

            <ul className="header__list" id="navigation">
                <li className="header__item"><NavLink exact to="/" activeClassName="header__link_active" className="header__link">{t("HEADER.HOME")}</NavLink></li>
                <li className="header__item"><NavLink exact to="/about" activeClassName="header__link_active" className="header__link">{t("HEADER.ABOUT")}</NavLink></li>
                <li className="header__item"><NavLink exact to="/music" activeClassName="header__link_active" className="header__link">{t("HEADER.MUSIC")}</NavLink></li>
                <li className="header__item"><NavLink exact to="/contacts" activeClassName="header__link_active" href="/#" className="header__link">{t("HEADER.CONTACTS")}</NavLink></li>

                <li className="header__item">
                    <HeaderLanguage hookTranslate={i18n}/>
                </li>
            </ul>

            <span className="header__menu material-icons" id="open_menu">menu</span>
        </header>
    );
}

export default Header;
