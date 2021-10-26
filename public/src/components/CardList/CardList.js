import { Component } from "react";

import Card from "../Card/Card";

import "./CardList.scss";

class CardList extends Component {
    render() {
        return(
            <div className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

export default CardList;