import React from 'react'
import "./Card.scss";
import { Link } from "react-router-dom";




const Card = ({ cardData }) => {

    return (
        <div className={`card`} id={`${cardData.id}`}>

            <div className="img">
                {cardData.poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w500${cardData.poster_path}`} alt="poster" />
                    :
                    <img src={`https://image.tmdb.org/t/p/w500${cardData.profile_path}`} alt="poster" />
                }
            </div>
            {/* <div className="img">
                <div className="popup">
                    <h2>
                        {cardData.name ?
                            cardData.original_name ? cardData.original_name : cardData.name
                            : cardData.original_title}
                    </h2>
                </div>
            </div>

            <Link to={`/${cardData.first_air_date ? "TVShows" :
                // cardData.episode_count ? `Seasons` :
                cardData.known_for_department ? "Persons" :
                    "Movies"}/${cardData.id}`}
            >
                <button className="details-btn">More Details</button>
            </Link> */}
        </div>
    )
}

export default Card;