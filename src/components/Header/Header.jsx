import { useTranslation } from "react-i18next";

import HeaderLanguage from "../HeaderLanguage/HeaderLanguage";

import "./Header.scss";

function Header() {
    const {t, i18n} = useTranslation();

    return(
        <header className="header">
            <a href="/#" className="header__logo">{t("HEADER.LOGO")}</a>

            <ul className="header__list" id="navigation">
                <li className="header__item"><a href="/#" className="header__link header__link_active">{t("HEADER.HOME")}</a></li>
                <li className="header__item"><a href="/#" className="header__link">{t("HEADER.ABOUT")}</a></li>
                <li className="header__item"><a href="/#" className="header__link">{t("HEADER.MUSIC")}</a></li>
                <li className="header__item"><a href="/#" className="header__link">{t("HEADER.CONTACTS")}</a></li>

                <li className="header__item">
                    <HeaderLanguage hookTranslate={i18n}/>
                </li>
            </ul>

            <span className="header__menu material-icons" id="open_menu">menu</span>
        </header>
    );
}

export default Header;
