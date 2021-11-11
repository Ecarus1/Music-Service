import { useState, useEffect } from "react";

import PlayerHeader from "../PlayerHeader/PlayerHeader";
import PlayerInterface from "../PlayerInterface/PlayerInterface";
import "./Player.scss";

function Player() {
    // const original = "image/original.jpg";

    const [songs, setSongs] = useState([{
        title: "Самый дорогой",
        artist: "Нервы",
        imgSrc: "image/original.jpg",
        src: "music/Nervi-SmiyDorogoiChelovek.mp3"
    },
    {
        title: "Привет, лови",
        artist: "Нервы",
        imgSrc: "image/original2.jpg",
        src: "music/Nervi-ProvetLovi.mp3"
    },
    {
        title: "Sportlight",
        artist: "Marshmello, LilPeep",
        imgSrc: "image/original3.jpg",
        src: "music/MarshmelloLilPeep-Spotlight.mp3"
    }]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    // const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    // useEffect(() => {
    //     setNextSongIndex(() => {
    //         if (currentSongIndex + 1 > songs.length - 1) {
    //             return;
    //         } else {
    //             return currentSongIndex + 1;
    //         }
    //     });
    // }, [currentSongIndex]);

    // return(
    //     <div className="player">
    //         <img className="player__image" src={songs[currentSongIndex].imgSrc} alt="" />
    //         <PlayerHeader/>
    //         <PlayerInterface 
    //             // song={songs[currentSongIndex]}
    //             // nextSong={songs[nextSongIndex]}
    //             currentSongIndex={currentSongIndex}
    //             setCurrentSongIndex={setCurrentSongIndex}
    //             nextSongIndex={nextSongIndex}
    //             songs={songs}/>
    //     </div>
    // );

    return(
        <div className="player">
            <img className="player__image" src={songs[currentSongIndex].imgSrc} alt="" />
            <PlayerHeader/>
            <PlayerInterface
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                songs={songs}/>
        </div>
    );
}

export default Player;
