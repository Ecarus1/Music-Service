import React, {useState, useRef, useEffect} from "react";

import "./PlayerInterface.scss";

function PlayerInterface(props) {
    const audioElem = useRef();
    const rangeElem = useRef();


    // const [rangeMax, setRangeMax] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const progressBar = document.getElementById("progressBar");

    // const handleLoadMetadata = (meta) => {
    //     const {duration} = meta.target;
    //     console.log(duration);
    //     // maxMeaningSong(duration);
    // };

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play();
            console.log("Играет");
            // console.log(audioElem.current.duration);
        } else {
            audioElem.current.pause();
            console.log("Остановлен");
            // console.log(audioElem.current.duration);
        }
    }, [isPlaying]);

    // const togglePlayPause = () => {
    //     const prevValue = isPlaying;
    //     setIsPlaying(!prevValue);
    //     if (!prevValue) {
    //         audioElem.current.play();
    //     } else {
    //         audioElem.current.pause();
    //     }
    // };

    useEffect(() => {
        audioElem.current.addEventListener("loadedmetadata", ()=> {
            setDuration(audioElem.current.duration);
        });

        return () => {
            audioElem.current.removeEventListener("loadedmetadata");
        };
    }, [audioElem]);

    // function changeProgressBar() {
    //     audioElem..currentTime = progressBar.value;
    // }

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

    // const maxMeaningSong = (durations) => {
    //     setRangeMax(durations);
    //     // console.log(durations);
    // };

    const changeDurationSong = () => {
        rangeElem.current.value += 1;
    };

    return(
        <div className="player__interface">
            {/* <audio src={props.songs[props.currentSongIndex].src} ref={audioElem}>
            </audio> */}
            {/* <audio src={props.songs[props.currentSongIndex].src} id="audio" ref={audioElem} onLoadedMetadata={handleLoadMetadata}></audio> */}
            <audio src={props.songs[props.currentSongIndex].src} id="audio" ref={audioElem} preload="metadata"></audio>

            <div className="interface__title">
                <h3>{props.songs[props.currentSongIndex].title}</h3>
            </div>

            <div className="interface__settings">
                <i className="material-icons interface__setting">replay</i>
                <p className="interface__setting">{props.songs[props.currentSongIndex].artist}</p>
                <i className="material-icons interface__setting">volume_up</i>
            </div>

            <div className="interface__progress">
                {/* <div className="interface__played">
                    <div className="interface__circle"></div>
                </div> */}
                {/* <input type="range" id="progressBar" min="0" max={rangeMax} ref={rangeElem}/> */}
                <div style={{"color": "red"}}>0:00</div>
                <div style={{"color": "red"}}>{duration}</div>
                <input type="range" id="progressBar" min="0" max="" ref={rangeElem}/>
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
