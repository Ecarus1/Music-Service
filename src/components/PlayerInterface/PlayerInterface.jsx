import React, {useState, useRef, useEffect} from "react";

import PlayerRange from "../PlayerRange/PlayerRange";
import PlayerDurations from "../PlayerDurations/PlayerDurations";
import PlayerRangeDurations from "../PlayerRangeDurations/PlayerRangeDurations";

import "./PlayerInterface.scss";

function PlayerInterface(props) {
    const stateDataSong = props.songs;

    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(props.songs[0].status);
    const [currentTime, setCurrentTime] = useState(0);
    const [repeatToggle, setRepeatToggle] = useState(false);

    console.log(props.songs[0].status);

    const audioElem = useRef(null);
    // const rangeElem = useRef(null);

    const clazz = "material-icons interface__setting";

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play();
            changeStatePlayList();
            console.log("Играет");
        } else {
            audioElem.current.pause();
            console.log("Остановлен");
            changeStatePlayList();
        }
    }, [isPlaying, props.currentSongIndex]);

    useEffect(() => {
        console.info("loaded");

        const loaded = () => {
            const seconds = Math.floor(audioElem.current.duration);
            setDuration(seconds);
        };

        audioElem.current.addEventListener("loadedmetadata", loaded);
        audioElem.current.addEventListener("ended", SkipSong);

        return () => {
            console.info("destroyed");

            // TODO memery leak
            audioElem.current.removeEventListener("loadedmetadata", loaded);
            audioElem.current.removeEventListener("ended", SkipSong);
        };
    }, [audioElem, props.songs, repeatToggle]);

    const SkipSong = (forwards = true) => {
        if(repeatToggle == false) {

            if (forwards) {
                props.setCurrentSongIndex(() => {
                    let temp = props.currentSongIndex;
                    temp++;

                    if (temp > props.songs.length - 1) {
                        temp = 0;
                        stateDataSong[props.songs.length - 1].status = false;
                        return temp;
                    }

                    stateDataSong[temp - 1].status = false;

                    return temp;
                });
            } else {
                props.setCurrentSongIndex(() => {
                    let temp = props.currentSongIndex;
                    temp--;

                    if (temp < 0) {
                        temp = props.songs.length - 1;
                        stateDataSong[0].status = false;
                        return temp;
                    }

                    stateDataSong[temp + 1].status = false;

                    return temp;
                });
            }
        } else {
            audioElem.current.currentTime = 0;
            audioElem.current.play();
        }
    };

    const changeStatePlayList = () => {
        stateDataSong[props.currentSongIndex].status = isPlaying;
        props.setDataMusic([...stateDataSong]);
    };

    return(
        <div className="player__interface">
            <audio src={props.songs[props.currentSongIndex].src} id="audio" ref={audioElem} preload="metadata"></audio>

            <div className="interface__title">
                <h3>{props.songs[props.currentSongIndex].title}</h3>
            </div>

            <div className="interface__settings">
                <div className={clazz + (repeatToggle ? clazz + " interface__setting_active" : "")} onClick={() => setRepeatToggle(!repeatToggle)}>replay</div>
                <p className="interface__setting">{props.songs[props.currentSongIndex].artist}</p>

                <div className="interface__conteiner">
                    <PlayerRange audioElem={audioElem}/>
                    <i className="material-icons interface__setting">volume_up</i>
                </div>
            </div>

            <div className="interface__progress">
                <PlayerDurations currentTime={currentTime} duration={duration}/>
                {/* <input type="range" className="interface__progressBar" id="progressBar" defaultValue="0" ref={rangeElem} onChange={changeRange}/> */}
                <PlayerRangeDurations audioElem={audioElem} isPlaying={isPlaying} duration={duration} setCurrentTime={setCurrentTime}/>
            </div>

            <div className="interface__controls">
                <i className="material-icons icon" style={{"cursor": "pointer"}} onClick={() => SkipSong(false)}>skip_previous</i>
                <i className="material-icons icon" style={{"cursor": "pointer"}} onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "pause" : "play_arrow"}</i>
                <i className="material-icons icon" style={{"cursor": "pointer"}} onClick={() => SkipSong()}>skip_next</i>
            </div>
        </div>
    );
}

export default PlayerInterface;
