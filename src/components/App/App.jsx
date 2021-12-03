import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from "../Header/Header";
import Music from "../Pages/Music";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import PageNotFound from "../PageNotFound/PageNotFound";

import "./App.scss";

function App() {
    return(
        <Router>
            <div className="container__header">
                <Header/>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/about">
                    <About/>
                </Route>

                <Route exact path="/music">
                    <Music/>
                </Route>

                <Route exact path="/contacts">
                    <Contacts/>
                </Route>

                <Route path="*">
                    <PageNotFound/>
                </Route>
                {/* <SearchPanel /> */}
            </Switch>
        </Router>
    );
}

export default App;
