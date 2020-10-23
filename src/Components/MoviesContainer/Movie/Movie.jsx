import React from 'react'
import "./Movie.scss";


const Movie = (props) => {
    return (
        <div className="movie">
            <div className="img">
                <img src={`https://image.tmdb.org/t/p/w500/${props.poster}`} alt="poster" />
            </div>
        </div>
    )
}

export default Movie;