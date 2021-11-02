import "./HeaderLanguage.scss";
import { useTranslation } from "react-i18next";

function HeaderLanguage() {
    const {i18n} = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return(
        <div className="translate">
            <select className="translate__list" onChange={changeLanguage}>
                <option className="translate__item" value="ru">Русский</option>
                <option className="translate__item" value="en">English</option>
            </select>
        </div>
    );
}

export default HeaderLanguage;
