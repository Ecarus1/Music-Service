import { useState } from "react";

import CardList from "../CardList/CardList";
import Playlist from "../Playlist/Playlist";
import Player from "../Player/Player";

function Music () {
    const [dataMusic, setDataMusic] = useState([
        {
            id: 1,
            title: "Самый дорогой",
            artist: "Нервы",
            imgSrc: "/image/original.jpg",
            src: "/music/Nervi-SmiyDorogoiChelovek.mp3",
            status: false
        },
        {
            id: 2,
            albumId: 3,
            title: "Alone",
            artist: "Marshmello",
            imgSrc: "/image/original3.jpg",
            src: "/music/Marshmello-Alone.mp3"
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    
    const changePlayListMusic = (songs) => {
        setDataMusic(songs);
        setCurrentSongIndex(0);
        console.log("Состояние изменилось");
    };

    return(
        <div className="container">
            <CardList changePlayListMusic={changePlayListMusic}/>
            <Playlist dataPlaylist={dataMusic} />
            <Player dataMusic={dataMusic} setDataMusic={setDataMusic} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex}/>
        </div>
    );
}

export default Music;