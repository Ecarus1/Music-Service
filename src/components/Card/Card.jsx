// import musicService from "../../services/MusicService";
import { useEffect, useState, useRef } from "react";
import useMusicService from "../../services/MusicService";

import "./Card.scss";

function Card(props) {
    // const original = "image/original.jpg";
    const [dataMusic, setDataMusic] = useState([]);
    const cardElem = useRef(null);

    const {getCurrentAllTracksInAlbum} = useMusicService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getCurrentAllTracksInAlbum(props.idAlbum)
            .then(onLoadedMusicData);
    };

    const onLoadedMusicData = (newDataMusic) => {
        setDataMusic(newDataMusic);
    };

    const cardClicked = () => {
        props.changePlayListMusic(dataMusic.map(track => ({
            ...track,
            status: false,
        })));

        props?.onClick();
    };
    
    return(
        <div ref={cardElem} className={"card " + (props.className)} onClick={cardClicked}>
            <img className="img" src={props.imgSrc} alt="" />
            <div className="card__border">
                <h2 className="card__group">{props.name}</h2>
            </div>
        </div>
    );
}

export default Card;