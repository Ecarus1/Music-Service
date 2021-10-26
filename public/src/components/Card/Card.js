import { Component } from "react";

import "./Card.scss";

class Card extends Component {
    render() {
        return(
            <div className="card img">
                <div className="card__border">
                    <h2 className="card__group">Нервы</h2>
                </div>
            </div>
        );
    }
}

export default Card;