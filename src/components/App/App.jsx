import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Player from "../Player/Player";
import Playlist from "../Playlist/Playlist";
import SearchPanel from "../SearchPanel/SearchPanel";

import original from "../../image/original.jpg";
import "./App.scss";

const dataCard = [
    {id: 1, nameGroup: "Нервы"},
    {id: 2, nameGroup: "Нирвана"},
    {id: 3, nameGroup: "Френдзона"},
    {id: 4, nameGroup: "Король и шут"},
    {id: 5, nameGroup: "Lida"},
    {id: 6, nameGroup: "Кис-Кис"}
];

const dataPlaylist = [
    {id: 1, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
    {id: 2, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
    {id: 3, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: true},
    {id: 4, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
    {id: 5, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
    {id: 6, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
    {id: 7, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
    {id: 8, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
    {id: 9, nameMusic: "Батареи", nameGroup: "Нервы", img: original, status: false},
];

function App() {
    return(
        <div className="container">
            <Header/>
            <Info />
            <CardList dataCard={dataCard} />
            <Playlist dataPlaylist={dataPlaylist} />
            <Player />
            <SearchPanel />
        </div>   
    );
}

export default App;