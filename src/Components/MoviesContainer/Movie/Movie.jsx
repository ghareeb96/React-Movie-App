import React from 'react'
import "./Movie.scss";
import { Link } from "react-router-dom";
// import { Waypoint } from 'react-waypoint';




const Movie = (props) => {
    return (
        <div className="movie" id={`${props.movie.id}`}>

            <div className="img">
                <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt="poster" />
            </div>

            <Link to={`/${props.movie.first_air_date ? "TVDetails" : "movieDetails"}/${props.movie.id}`}>
                <button className="details-btn">More Details</button>
            </Link>
        </div>
    )
}

export default Movie;