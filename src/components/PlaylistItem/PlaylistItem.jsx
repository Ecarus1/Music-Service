import "./PlaylistItem.scss";

// function PlaylistItem({nameMusic, nameGroup, img, status}) {
//     let classText = "playlist__state";
//     let statusPlay = "play_arrow";
//     if(status) {
//         classText += " playlist__playing";
//         statusPlay = "equalizer";
//     }
//     return(
//         <div className="playlist__song">
//             <div className="playlist__information">
//                 <img className="playlist__img playlist__first" src={img} alt="Картинка песни"/>

//                 <div className="playlist__titles">
//                     <h5 className="playlist__titles__songname">{nameMusic}</h5>
//                     <p className="playlist__titles__group">{nameGroup}</p>
//                 </div>
//             </div>

//             <div className={classText}>
//                 <i className="material-icons">{statusPlay}</i>
//             </div>
//         </div>
//     );
// }

function PlaylistItem({title, artist, imgSrc, status}) {
    let classText = "playlist__state";
    let statusPlay = "play_arrow";
    if(status) {
        classText += " playlist__playing";
        statusPlay = "equalizer";
    }
    return(
        <div className="playlist__song">
            <div className="playlist__information">
                <img className="playlist__img playlist__first" src={imgSrc} alt="Картинка песни"/>

                <div className="playlist__titles">
                    <h5 className="playlist__titles__songname">{title}</h5>
                    <p className="playlist__titles__group">{artist}</p>
                </div>
            </div>

            <div className={classText}>
                <i className="material-icons">{statusPlay}</i>
            </div>
        </div>
    );
}

export default PlaylistItem;