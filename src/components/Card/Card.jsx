import "./Card.scss";

function Card({name, dataMusic, changePlayListMusic}) {
    const original = "image/original.jpg";
    
    return(
        <div className="card" onClick={() => changePlayListMusic(dataMusic)}>
            <img className="img" src={original} alt="" />
            <div className="card__border">
                <h2 className="card__group">{name}</h2>
            </div>
        </div>
    );
}

export default Card;