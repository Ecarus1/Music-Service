import { useState, useEffect } from "react";

import CardList from "../CardList/CardList";
import Playlist from "../Playlist/Playlist";
import Player from "../Player/Player";

import useMusicService from "../../services/MusicService";

function Music () {
    const [dataMusic, setDataMusic] = useState([
        {
            id: null,
            albumId: null,
            title: null,
            artist: null,
            imgSrc: null,
            src: null
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const {getAllTracks} = useMusicService();


    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllTracks()
            .then(onLoadedMusicData);
    };

    const onLoadedMusicData = (newDataMusic) => {
        setDataMusic(newDataMusic);
    };
    
    const changePlayListMusic = (songs) => {
        setDataMusic(songs);
        setCurrentSongIndex(0);
        console.log("Состояние изменилось");
    };

    return(
        <div className="container__music">
            <CardList changePlayListMusic={changePlayListMusic}/>
            <Playlist dataPlaylist={dataMusic} />
            <Player dataMusic={dataMusic} setDataMusic={setDataMusic} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex}/>
        </div>
    );
}

export default Music;