import { useRef, useEffect } from "react";

function PlayerRangeDurations ({audioElem, isPlaying, duration, setCurrentTime}) {

    const rangeElem = useRef(null);
    const animationElem = useRef(null);

    const changeRange = () => {
        audioElem.current.currentTime = rangeElem.current.value;
        setCurrentTime(rangeElem.current.value);
    };

    useEffect(() => {
        if (isPlaying) {
            animationElem.current = requestAnimationFrame(whilePlaying);
        } else {
            cancelAnimationFrame(animationElem.current);
        }
    }, [isPlaying]);

    const whilePlaying = () => {
        rangeElem.current.value = audioElem.current.currentTime;
        setCurrentTime(rangeElem.current.value);
        animationElem.current = requestAnimationFrame(whilePlaying);
    };

    return (
        <>
            <input type="range" className="interface__progressBar" id="progressBar" max={duration} defaultValue="0" ref={rangeElem} onChange={changeRange}/>
        </>
    );
}

export default PlayerRangeDurations;