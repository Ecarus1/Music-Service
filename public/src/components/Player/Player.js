import { Component } from "react";

import PlayerHeader from "../PlayerHeader/PlayerHeader";
import PlayerInterface from "../PlayerInterface/PlayerInterface";

import "./Player.scss";

class Player extends Component {
    render() {
        return(
            <div className="player">
                <div className="player__image"></div>
                <PlayerHeader/>
                <PlayerInterface/>
            </div>
        );
    }
}

export default Player;