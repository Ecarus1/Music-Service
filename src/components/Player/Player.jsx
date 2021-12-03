import PlayerHeader from "../PlayerHeader/PlayerHeader";
import PlayerInterface from "../PlayerInterface/PlayerInterface";

import "./Player.scss";

function Player({dataMusic, setDataMusic, currentSongIndex, setCurrentSongIndex}) {
    return(
        <div className="player">
            <img className="player__image" src={dataMusic[currentSongIndex].imgSrc} alt="" />
            <PlayerHeader/>
            <PlayerInterface
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                songs={dataMusic}
                setDataMusic={setDataMusic}/>
        </div>
    );
}

export default Player;
