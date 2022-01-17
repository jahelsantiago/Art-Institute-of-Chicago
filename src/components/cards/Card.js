import React from "react";
import { Slide  } from "react-reveal";
import "./Card.css";

export default function Card({image, onClick}) {
    return(
        <Slide  bottom>
            <div className="card" onClick={onClick}>
                <div className="card-image">
                    <img src={image.imageUrl} alt={image.title} className="card-image"/>
                </div>
                <div className="card-content">
                    <h3>{image.title}</h3>
                </div>
            </div> 
        </Slide >
        )
}