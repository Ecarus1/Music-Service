import React, {useState, useRef, useEffect} from "react";

import "./PlayerInterface.scss";

function PlayerInterface(props) {
    const audioElem = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    // const audioId = document.getElementById("audio-id");
    const audio = new Audio();
    audio.src = props.songs[props.currentSongIndex].src;

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play();
            console.log("Играет");
        } else {
            audioElem.current.pause();
            console.log("Остановлен");
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    };

    // const SkipSong = (forwards = true) => {
    //     if (forwards) {
    //         props.setCurrentSongIndex(() => {
    //             let temp = props.currentSongIndex;
    //             temp++;

    //             if (temp > props.songs.length - 1) {
    //                 temp = 0;
    //             }

    //             return temp;
    //         });
    //     } else {
    //         props.setCurrentSongIndex(() => {
    //             let temp = props.currentSongIndex;
    //             temp--;

    //             if (temp < 0) {
    //                 temp = props.songs.length - 1;
    //             }
                
    //             return temp;
    //         });
    //     }
    // };

    // return(
    //     <div className="player__interface">
    //         <audio src={props.songs[props.currentSongIndex].src} ref={audioElem}></audio>

    //         <div className="interface__title">
    //             <h3>{props.songs[props.currentSongIndex].title}</h3>
    //         </div>

    //         <div className="interface__settings">
    //             <i className="material-icons interface__setting">replay</i>
    //             <p className="interface__setting">{props.songs[props.currentSongIndex].artist}</p>
    //             <i className="material-icons interface__setting">volume_up</i>
    //         </div>

    //         <div className="interface__progress">
    //             <div className="interface__played">
    //                 <div className="interface__circle"></div>
    //             </div>
    //         </div>

    //         <div className="interface__controls">
    //             <i className="material-icons icon" onClick={() => SkipSong()}>skip_previous</i>
    //             <i className="material-icons icon" onClick={() => setIsPlaying(!isPlaying)}>play_arrow</i>
    //             <i className="material-icons icon" onClick={() => SkipSong(false)}>skip_next</i>
    //         </div>
    //     </div>
    // );   
    // const {songs, currentSongIndex} = props;
    return(
        <div className="player__interface">
            {/* <audio src={props.songs[props.currentSongIndex].src} ref={audioElem}>
            </audio> */}
            <audio id="audio-id" ref={audioElem}></audio>

            <div className="interface__title">
                <h3>{props.songs[props.currentSongIndex].title}</h3>
            </div>

            <div className="interface__settings">
                <i className="material-icons interface__setting">replay</i>
                <p className="interface__setting">{props.songs[props.currentSongIndex].artist}</p>
                <i className="material-icons interface__setting">volume_up</i>
            </div>

            <div className="interface__progress">
                <div className="interface__played">
                    <div className="interface__circle"></div>
                </div>
            </div>

            <div className="interface__controls">
                <i className="material-icons icon" onClick={() => SkipSong(false)}>skip_previous</i>
                <i className="material-icons icon" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "pause" : "play_arrow"}</i>
                <i className="material-icons icon" onClick={() => SkipSong()}>skip_next</i>
            </div>
        </div>
    );   
}

export default PlayerInterface;