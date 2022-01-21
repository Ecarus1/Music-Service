function PlayerDurations ({currentTime, duration}) {

    const calculateTimeMusic = (sec) => {
        const minutes = Math.floor(sec / 60);
        const concretMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(sec % 60);
        const concretSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${concretMinutes}:${concretSeconds}`;
    };

    return(
        <div className="interface__durations">
            <div>{calculateTimeMusic(currentTime)}</div>
            <div>{calculateTimeMusic(duration)}</div>
        </div>
    );
}

export default PlayerDurations;