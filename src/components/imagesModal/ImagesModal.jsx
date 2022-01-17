import react from "react";
import "./imagesModal.css";

export default function ImagesModal({artWork}) {
    console.log(artWork)
    if(artWork === undefined){
        return null;
    }
    return (
        <div className="imagesModal-container">
            <div className="imagesModal">
                <div className="modal-title">
                    <h1>{artWork.title}</h1>
                </div>
                <div className="modal-artist">
                    <h2>{artWork.artist_display}</h2>
                </div>
                <div className="modal-image">
                    <img src={artWork.imageUrl} alt={artWork.title}/>
                </div>
            </div>
        </div>);
}