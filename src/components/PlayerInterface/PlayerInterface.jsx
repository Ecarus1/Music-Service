import React, {useState, useRef, useEffect} from "react";

import "./PlayerInterface.scss";

function PlayerInterface(props) {
    const stateDataSong = props.songs;

    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const audioElem = useRef();
    const rangeElem = useRef();
    const rangeVolumElem = useRef();
    const animationElem = useRef();

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play();
            // audioElem.current.volume = 0.2;
            animationElem.current = requestAnimationFrame(whilePlaying);
            changeStatePlayList();
            console.log("Играет");
            // props.setDataMusic(true);
            // console.log(audioElem.current.duration);
        } else {
            audioElem.current.pause();
            cancelAnimationFrame(animationElem.current);
            console.log("Остановлен");
            changeStatePlayList();
            // props.setDataMusic(true);
            // console.log(audioElem.current.duration);
        }
    }, [isPlaying, props.currentSongIndex]);

    const whilePlaying = () => {
        rangeElem.current.value = audioElem.current.currentTime;
        setCurrentTime(rangeElem.current.value);
        animationElem.current = requestAnimationFrame(whilePlaying);
    };

    //Функция вычисления времени музыки в минутах и секундах
    const calculateTimeMusic = (sec) => {
        const minutes = Math.floor(sec / 60);
        const concretMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(sec % 60);
        const concretSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${concretMinutes}:${concretSeconds}`;
    };

    useEffect(() => {
        audioElem.current.addEventListener("loadedmetadata", ()=> {
            const seconds = Math.floor(audioElem.current.duration);
            rangeElem.current.max = seconds;
            setDuration(seconds);
        });

        audioElem.current.addEventListener("ended", SkipSong);

        return () => {
            audioElem.current.removeEventListener("loadedmetadata");
            audioElem.current.removeEventListener("ended");
        };
    }, [audioElem]);

    const SkipSong = (forwards = true) => {
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
    };

    const changeRange = () => {
        audioElem.current.currentTime = rangeElem.current.value;
        setCurrentTime(rangeElem.current.value);
    };

    const changeRangeVolumeSong = () => {
        let meaningVolume = rangeVolumElem.current.value / 100;
        // console.log(meaningVolume);
        audioElem.current.volume = meaningVolume;
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
                <i className="material-icons interface__setting">replay</i>
                <p className="interface__setting">{props.songs[props.currentSongIndex].artist}</p>

                <div className="interface__conteiner">
                    <input className="interface__volume" type="range" min="0" max="100" defaultValue="100" ref={rangeVolumElem} onChange={changeRangeVolumeSong}/>
                    <i className="material-icons interface__setting">volume_up</i>
                </div>
            </div>

            <div className="interface__progress">
                {/* <div className="interface__played">
                    <div className="interface__circle"></div>
                </div> */}
                {/* <input type="range" id="progressBar" min="0" max={rangeMax} ref={rangeElem}/> */}
                <div className="interface__durations">
                    <div>{calculateTimeMusic(currentTime)}</div>
                    <div>{calculateTimeMusic(duration)}</div>
                </div>
                <input type="range" className="interface__progressBar" id="progressBar" defaultValue="0" ref={rangeElem} onChange={changeRange}/>
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
