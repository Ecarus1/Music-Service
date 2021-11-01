import "./HeaderLanguage.scss";

function HeaderLanguage({onChangeLanguage}) {
    return(
        <div className="translate">
            <a href="/#" className="translate__logo material-icons">translate</a>

            <ol className="translate__menu">
                <li className="translate__item" onClick={() => onChangeLanguage("ru")}>Русский</li>
                <li className="translate__item" onClick={() => onChangeLanguage("en")}>English</li>
            </ol>
        </div>
    );
}

export default HeaderLanguage;