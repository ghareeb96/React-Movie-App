import React from 'react'
import "./Card.scss";
import { Link } from "react-router-dom";
import { Star } from '@material-ui/icons';



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
                    <div className="card-info">

                        <div className="title">
                            <h4>
                                {cardData.name ?
                                    cardData.original_name ? cardData.original_name : cardData.name
                                    : cardData.original_title}
                            </h4>
                        </div>
                        {
                            cardData.vote_average ?
                                <div className="rate">
                                    <Star className="icon" />
                                    <span>{cardData.vote_average}</span>
                                </div>

                                : ""
                        }
                    </div>

                    <Link to={`/${cardData.first_air_date ? "TV" :
                        cardData.known_for_department ? "Person" :
                            "Movie"}/${cardData.id}`}
                        className="btn details-btn"
                    >
                        View Details
            </Link>
                </div>
            </div>

        </div>
    )
}

export default Card;