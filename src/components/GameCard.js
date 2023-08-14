import React, { useState } from "react";
import checkImage from '../assets/checked.png'
import uncheckImage from '../assets/uncheck.png'

const GamesCard = (props) => {

    const [isChecked, setIsChecked] = useState(false)

    function toggleIsFavorite() {
        setIsChecked(prevState => !prevState)
    }

    return ( 
        <div className="game-card">
            <div className="game-image-group">
                <img src={`games-images/${props.imageUrl1}`} alt={props.title} className="game-image" />
            </div>
            <div className="game-content">
                <a href="/" className="game-title"> {props.title} </a>
                <p className="game-price"> £{props.price} </p>
                <p className="game-rating"> Ratings: ({props.ratings})</p>
                <img 
                    src={ isChecked ? checkImage : uncheckImage }
                    className='likes'
                    onClick={toggleIsFavorite}
                    alt="icon"
                />
            </div>
        </div>
    );
}
 
export default GamesCard;
