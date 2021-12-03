import { Link } from "react-router-dom";

function PageNotFound () {
    return(
        <div className="container">
            <p style={{
                "textAlign": "center",
                "fontWeight": "bold",
                "fontSize": "24px",
                "color": "white"}}>Такой страницы не существует</p>
            <Link
                to="/" 
                style={{
                    "display": "block",
                    "textAlign": "center",
                    "fontWeight": "bold",
                    "fontSize": "24px",
                    "marginTop": "100px",
                    "color": "white"}}>Вернуться на главную страницу</Link>
        </div>
    );
}

export default PageNotFound;