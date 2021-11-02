import PlayerHeader from "../PlayerHeader/PlayerHeader";
import PlayerInterface from "../PlayerInterface/PlayerInterface";
import "./Player.scss";

function Player() {
    const original = "image/original.jpg";

    return(
        <div className="player">
            <img className="player__image" src={original} alt="" />
            <PlayerHeader/>
            <PlayerInterface/>
        </div>
    );
}

export default Player;
