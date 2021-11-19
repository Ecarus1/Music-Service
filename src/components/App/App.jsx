import { useState } from "react";

import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Player from "../Player/Player";
import Playlist from "../Playlist/Playlist";
import SearchPanel from "../SearchPanel/SearchPanel";

// const original = "image/original.jpg";
import "./App.scss";

const dataCard = [
    {id: 1, nameGroup: "Нервы"},
    {id: 2, nameGroup: "Нирвана"},
    {id: 3, nameGroup: "Френдзона"},
    {id: 4, nameGroup: "Король и шут"},
    {id: 5, nameGroup: "Lida"},
    {id: 6, nameGroup: "Кис-Кис"}
];

// const dataPlaylist = [
//     {id: 1, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
//     {id: 2, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
//     {id: 3, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: true},
//     {id: 4, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
//     {id: 5, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
//     {id: 6, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
//     {id: 7, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
//     {id: 8, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
//     {id: 9, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
// ];

function App() {
    const [dataMusic, setDataMusic] = useState([
        {
            id: 1,
            title: "Самый дорогой",
            artist: "Нервы",
            imgSrc: "image/original.jpg",
            src: "music/Nervi-SmiyDorogoiChelovek.mp3",
            status: false
        }
    ]);
    
    const changePlayListMusic = (songs) => {
        setDataMusic(songs);
        console.log("Состояние изменилось");
    };

    return(
        <div className="container">
            <Header/>
            <Info />
            <CardList dataCard={dataCard} changePlayListMusic={changePlayListMusic}/>
            <Playlist dataPlaylist={dataMusic} />
            <Player dataMusic={dataMusic} setDataMusic={setDataMusic}/>
            <SearchPanel />
        </div>
    );
}

export default App;
