import Card from "../Card/Card";

import "./CardList.scss";

function CardList({dataCard}) {
    const element = dataCard.map(item => {
        return(
            <Card key={item.id} name={item.nameGroup}/>
        );
    });
    return(
        <div className="cards">
            {element}
        </div>
    );
}

export default CardList;