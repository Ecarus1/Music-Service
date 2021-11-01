import "./HeaderLanguage.scss";

// почему функция наверх передается через props? почему именно <Header> должен делать эту задачу?
// Пока не стоит так усложнять, здесь достаточно в этом компоненте сделать переключение языка
// по хорошему для таких вещей используют redux или оставляют логику максимально близко к конкретному контролу
function HeaderLanguage({onChangeLanguage}) {
    return(
        <div className="translate">
            <a href="/#" className="translate__logo material-icons">translate</a>

            {/*в задании явно указано что используем <select>*/}
            {/*к чему это? так не делают, li не является кнопной, ol является нумерованным списком*/}
            <ol className="translate__menu">
                <li className="translate__item" onClick={() => onChangeLanguage("ru")}>Русский</li>
                <li className="translate__item" onClick={() => onChangeLanguage("en")}>English</li>
            </ol>
        </div>
    );
}

export default HeaderLanguage;
