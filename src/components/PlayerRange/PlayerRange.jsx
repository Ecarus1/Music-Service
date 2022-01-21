import { useRef } from "react";

function PlayerRange ({audioElem}) {
    const rangeVolumElem = useRef(null);

    const changeRangeVolumeSong = () => {
        let meaningVolume = rangeVolumElem.current.value / 100;
        audioElem.current.volume = meaningVolume;
    };


    return (
        <>
            <input className="interface__volume" type="range" min="0" max="100" defaultValue="100" ref={rangeVolumElem} onChange={changeRangeVolumeSong}/>
        </>
    );
}

export default PlayerRange;