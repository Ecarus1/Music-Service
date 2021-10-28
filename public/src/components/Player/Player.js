import { Component } from "react";

import PlayerHeader from "../PlayerHeader/PlayerHeader";
import PlayerInterface from "../PlayerInterface/PlayerInterface";

import "./Player.scss";

class Player extends Component {
    render() {
        return(
            <div className="player">
                {/*это ошибка, это, как и в PlaylistItem, должно быть <img>, потому что отображает картинку как контент,
                картинки через background делаются только для фоновых картинок - оформления, для чего css и служит
                */}
                <div className="player__image"></div>
                <PlayerHeader/>
                <PlayerInterface/>
            </div>
        );
    }
}

export default Player;
