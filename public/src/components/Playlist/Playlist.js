import { Component } from "react";

import PlaylistItem from "../PlaylistItem/PlaylistItem";

import "./Playlist.scss";

class Playlist extends Component {
    render() {
        return(
            <div className="playlist">
                <PlaylistItem/>
                <PlaylistItem/>
                <PlaylistItem/>
                <PlaylistItem/>
            </div>
        );
    }
}

export default Playlist;