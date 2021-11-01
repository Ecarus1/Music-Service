import "./Card.scss";

function Card({name}) {
    return(
        <div className="card img">
            <div className="card__border">
                <h2 className="card__group">{name}</h2>
            </div>
        </div>
    );
}

export default Card;