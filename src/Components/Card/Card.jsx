import React from 'react'
import "./Card.scss";
import { Link } from "react-router-dom";




const Card = ({ cardData }) => {

    return (
        <div className="card" id={cardData.id} >
            <div className="inner-card">
                <div className="front-card">
                    <div className="img">
                        {cardData.poster_path ?
                            <img src={`https://image.tmdb.org/t/p/w500${cardData.poster_path}`} alt="poster" />
                            :
                            <img src={`https://image.tmdb.org/t/p/w500${cardData.profile_path}`} alt="poster" />
                        }
                    </div>

                </div>


                <div className="back-card">
                    <div className="title">
                        <h4>
                            {cardData.name ?
                                cardData.original_name ? cardData.original_name : cardData.name
                                : cardData.original_title}
                        </h4>
                    </div>

                    <Link to={`/${cardData.first_air_date ? "TVShows" :
                        // cardData.episode_count ? `Seasons` :
                        cardData.known_for_department ? "Persons" :
                            "Movies"}/${cardData.id}`}
                        className="btn details-btn"
                    >
                        More Details
            </Link>
                </div>
            </div>

        </div>
    )
}

export default Card;