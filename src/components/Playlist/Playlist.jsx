import PlaylistItem from "../PlaylistItem/PlaylistItem";

import "./Playlist.scss";

function Playlist({dataPlaylist}) {

    const element = dataPlaylist.map(item => {
        const {id, ...itemProps} = item;
        return(
            <PlaylistItem key={id} {...itemProps}/>
        );
    });
    return(
        <div className="playlist">
            {element}
        </div>
    );
}
export default Playlist;