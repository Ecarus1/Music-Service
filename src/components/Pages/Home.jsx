import Paralax from "../Paralax/Paralax";
import Info from "../Info/Info";

function Home () {
    return(
        <>
            <Paralax/>
            <div className="container">
                <Info />
            </div>
        </>
    );
}

export default Home;