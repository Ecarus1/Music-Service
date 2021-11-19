import Card from "../Card/Card";

import "./CardList.scss";


function CardList({dataCard, changePlayListMusic}) {

    const dataMusic = [
        {
            id: 1,
            title: "Самый дорогой",
            artist: "Нервы",
            imgSrc: "image/original.jpg",
            src: "music/Nervi-SmiyDorogoiChelovek.mp3",
            status: false
        },
        {
            id: 2,
            title: "Привет, лови",
            artist: "Нервы",
            imgSrc: "image/original2.jpg",
            src: "music/Nervi-ProvetLovi.mp3",
            status: false
        },
        {
            id: 3,
            title: "ДУРА",
            artist: "20TOKENS feat. ЗАВТРА БРОШУ",
            imgSrc: "image/original3.jpg",
            src: "music/20TOKENS-DOORA.mp3",
            status: false
        }
    ];

    const element = dataCard.map(item => {
        return(
            // <button onClick={() => changePlayListMusic(dataMusic)}></button>
            <Card key={item.id} name={item.nameGroup} dataMusic={dataMusic} changePlayListMusic={changePlayListMusic}/>
        );
    });

    return(
        <div className="cards">
            {element}
        </div>
    );
}

export default CardList;