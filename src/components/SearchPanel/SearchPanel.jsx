import "./SearchPanel.scss";
import { useTranslation } from "react-i18next";

function SearchPanel() {
    const {t} = useTranslation();
    
    return(
        <div className="search-panel">
            <form className="search-panel__form">
                <input className="search-panel__input" type="text" placeholder={t("SEARCH_PANEL_PLACEHOLDER")}/>
                <button className="search-panel__button material-icons" type="submit">search</button>
            </form>
        </div>
    );
}

export default SearchPanel;