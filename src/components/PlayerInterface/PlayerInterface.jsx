import "./PlayerInterface.scss";

function PlayerInterface() {
    return(
        <div className="player__interface">
            <div className="interface__title">
                <h3>Самый дорогой</h3>
            </div>

            <div className="interface__settings">
                <i className="material-icons interface__setting">replay</i>
                <p className="interface__setting">Нервы</p>
                <i className="material-icons interface__setting">volume_up</i>
            </div>

            <div className="interface__progress">
                <div className="interface__played">
                    <div className="interface__circle"></div>
                </div>
            </div>

            <div className="interface__controls">
                <i className="material-icons icon">skip_previous</i>
                <i className="material-icons icon">play_arrow</i>
                <i className="material-icons icon">skip_next</i>
            </div>
        </div>
    );   
}

export default PlayerInterface;