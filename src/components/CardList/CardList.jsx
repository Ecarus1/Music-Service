import Card from "../Card/Card";

import "./CardList.scss";


function CardList({dataCard}) {
    const dataMusic = [{
        title: "Самый дорогой",
        artist: "Нервы",
        imgSrc: "image/original.jpg",
        src: "music/Nervi-SmiyDorogoiChelovek.mp3"
    },
    {
        title: "Привет, лови",
        artist: "Нервы",
        imgSrc: "image/original2.jpg",
        src: "music/Nervi-ProvetLovi.mp3"
    },
    {
        title: "Sportlight",
        artist: "Marshmello, LilPeep",
        imgSrc: "image/original3.jpg",
        src: "music/MarshmelloLilPeep-Spotlight.mp3"
    }];

    const element = dataCard.map(item => {
        return(
            <Card key={item.id} name={item.nameGroup} dataMusic={dataMusic} />
        );
    });

    return(
        <div className="cards">
            {element}
        </div>
    );
}

export default CardList;