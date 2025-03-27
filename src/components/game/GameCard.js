import React, { useState } from "react";
import checkImage from '../../assets/checked.png'
import uncheckImage from '../../assets/uncheck.png'
import './gamecard.css';

const GamesCard = (props) => {
    const {id, title, price, imageUrl, ratings } = props

    const [isChecked, setIsChecked] = useState(false)

    function toggleIsFavorite() {
        setIsChecked(prevState => !prevState)
    }

    return ( 
        <div className="game-card" key={id}>
            <div className="game-image-group">
                <img src={`/images/${imageUrl[0]}`} alt={title} className="game-image" />
            </div>
            <div className="game-content">
                <a href="/" className="game-title"> {title} </a>
                <p className="game-price"> £{price} </p>
                <p className="game-rating"> Ratings: ({ratings})</p>
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
