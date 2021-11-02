import "./Card.scss";

function Card({name}) {
    const original = "image/original.jpg";

    return(
        <div className="card">
            <img className="img" src={original} alt="" />
            <div className="card__border">
                <h2 className="card__group">{name}</h2>
            </div>
        </div>
    );
}

export default Card;