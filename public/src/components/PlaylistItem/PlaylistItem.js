import { Component } from "react";

import "./PlaylistItem.scss";

class PlaylistItem extends Component {
    render() {
        return(
            <div className="playlist__song">
                <div className="playlist__information">
                    <div className="playlist__img playlist__first"></div>

                    <div className="playlist__titles">
                        <h5 className="playlist__titles__songname">Самый дорогой</h5>
                        <p className="playlist__titles__group">Нервы</p>
                    </div>
                </div>

                <div className="playlist__state playlist__playing">
                    <i className="material-icons">equalizer</i>
                </div>
            </div>
        );
    }
}

export default PlaylistItem;