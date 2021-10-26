import { Component } from "react";

import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Player from "../Player/Player";
import Playlist from "../Playlist/Playlist";
import SearchPanel from "../SearchPanel/SearchPanel";

import './App.scss';

class App extends Component {
    render() {
        return(
            <div className="container">
                <Header />
                <Info />
                <CardList />
                <Playlist/>
                <Player />
                <SearchPanel />
            </div>
        );
    }
}

export default App;