import React, { useEffect, useState } from 'react'
import "./MovieDetails.scss";

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const MovieDetails = ({ match }) => {


    const [movie, getMovie] = useState({});
    const [credits, setCredits] = useState([]);
    const fetchData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => getMovie(data))
    }

    const getCredits = () => {
        fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setCredits(data.cast))
    }
    console.log(credits);

    useEffect(() => {
        fetchData();
        getCredits();
    }, [])

    if (movie.genres) {
        return (
            <div className="movie-details">
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
                        <div className="bg-img">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
                        </div>
                        <div className="title">
                            <h1>
                                {`${movie.title}  (${movie.release_date.slice(0, 4)})`}
                            </h1>
                        </div>
                        <div className="tagline">
                            <h2>"{movie.tagline}"</h2>"
                        </div>
                        <div className="genres">
                            <ul>
                                {movie.genres.map(item => {
                                    return (<li key={item.id} >{item.name}</li>)
                                })}
                            </ul>
                        </div>
                        <div className="overview">
                            <div className="left">
                                <h2>Overview</h2>
                            </div>
                            <div className="right">
                                <p>{movie.overview}</p>
                            </div>
                        </div>

                        <div className="cast">
                            <div className="left">
                                <h2>Cast</h2>
                            </div>
                            <div className="right">
                                {credits
                                    .filter(item => item.profile_path !== null)
                                    .filter((item, index) => index < 8)
                                    .map((character) => {
                                        return (
                                            <div key={character.id} className="profile-container">
                                                <img src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
                                                    alt="Profile" />
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        )
    } else {
        return (
            <div className="movie-details"></div>
        )
    }
}

export default MovieDetails;