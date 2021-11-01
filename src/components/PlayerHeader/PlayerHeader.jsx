import "./PlayerHeader.scss";

function PlayerHeader() {
    return(
        <div className="player__header">
            <div className="player__settings">
                <i className="material-icons">menu</i>
            </div>

            <div className="player__settings">
                <i className="material-icons search">search</i>
                <i className="material-icons">queue_music</i>
            </div>
        </div>
    );
}

export default PlayerHeader;