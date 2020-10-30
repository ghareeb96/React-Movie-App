import React, { useEffect, useState } from 'react'
import "./MovieDetails.scss";

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const MovieDetails = ({ match }) => {


    const [movie, getMovie] = useState({});

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => getMovie(data))
        }
        fetchData();
    }, [])



    return (
        <div className="movie-details">
            <div className="bg-img">
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
            </div>

            <div className="details">
                <div className="left-section">
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    </div>
                    <div className="btns">
                        <button className="watch-list">Add To Watchlist</button>
                        <button className="watched-list">Add To Watchedlist</button>
                    </div>
                </div>

                <div className="right-section">

                </div>


            </div>
        </div>
    )
}

export default MovieDetails;