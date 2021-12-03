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
    // const [newItemLoading, setNewItemLoading] = useState(false);

    const {loading, error, getAllAlbums} = useMusicService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        // initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllAlbums()
            .then(onCardListLoaded);
    };

    const changePlayListMusicInternal = (e, id) => {
        changePlayListMusic(e);
        // setSelectedIdAlbum(id);
    };

    const onCardListLoaded = (newCardList) => {
        setCardList(newCardList);
    };

    const element = cardList.map(item => {
        return(
            <Card onClick={() => setSelectedIdAlbum(item.id)} className={item.id === selectedIdAlbum ? "card_active": ""} key={item.id} idAlbum={item.id} name={item.title} imgSrc={item.imgSrc} changePlayListMusic={(e) => changePlayListMusicInternal(e, item.id)} selectedIdAlbum={selectedIdAlbum}/>
        );
    });

    // const focusOnItem = (id) => {
    //     itemRefs.current.forEach(item => item.classList.remove("card_active"));
    //     itemRefs.current[id].classList.add("card_active");
    //     itemRefs.current[id].focus();
    //     console.log(itemRefs.current[id]);
    // };

    // const addToRef = (el) => {
    //     console.log(el);
    // };

    // function renderItems(arr) {
    //     const items =  arr.map((item, i) => {

    //         return(
    //             <Card 
    //                 key={item.id}
    //                 idAlbum={item.id}
    //                 name={item.title}
    //                 imgSrc={item.imgSrc}
    //                 ref={el => itemRefs.current[i] = el}
    //                 // addToRef={addToRef}
    //                 // onClick={() => focusOnItem(i)}
    //                 itemRefs={itemRefs}
    //                 focusOnItem={focusOnItem}
    //                 id={i}
    //                 changePlayListMusic={changePlayListMusic}/>
    //         );
    //     });

    //     return(items);
    // }

    // const items = renderItems(cardList);
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