import Card from "../Card/Card";
// import musicService from "../../services/MusicService";
import useMusicService from "../../services/MusicService";

import Preloader from "../Preloader/Preloader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import "./CardList.scss";
import { useEffect, useState} from "react";


function CardList({changePlayListMusic}) {
    const [cardList, setCardList] = useState([]);

    const [selectedIdAlbum, setSelectedIdAlbum] = useState(null);

    const {loading, error, getAllAlbums} = useMusicService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllAlbums()
            .then(onCardListLoaded);
    };

    const changePlayListMusicInternal = (e, id) => {
        changePlayListMusic(e);
    };

    const onCardListLoaded = (newCardList) => {
        setCardList(newCardList);
    };

    const element = cardList.map(item => {
        return(
            <Card onClick={() => setSelectedIdAlbum(item.id)} className={item.id === selectedIdAlbum ? "card_active": ""} key={item.id} idAlbum={item.id} name={item.title} imgSrc={item.imgSrc} changePlayListMusic={(e) => changePlayListMusicInternal(e, item.id)} selectedIdAlbum={selectedIdAlbum}/>
        );
    });

    const errorMessage = error ? <ErrorMessage/> : null;
    const preloader = loading ? <Preloader/> : null;

    return(
        <div className="cards">
            {errorMessage}
            {preloader}
            {element}
        </div>
    );
}

export default CardList;