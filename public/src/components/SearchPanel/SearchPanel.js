import { Component } from "react";

import "./SearchPanel.scss";

class SearchPanel extends Component {
    render() {
        return(
            <div className="search-panel">
                <form className="search-panel__form">
                    <input className="search-panel__input" type="text" placeholder="What your say?"/>
                    <button className="search-panel__button material-icons" type="submit">search</button>
                </form>
            </div>
        );
    }
}

export default SearchPanel;