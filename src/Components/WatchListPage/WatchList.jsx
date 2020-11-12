import React, { useState, useEffect } from 'react'
import "./Watchlist.scss";
import MoviesContainer from "../MoviesContainer/MoviesContainer"

const api_key = "137436a3a883e2b94597a24e32d9d6b8";

const WatchList = () => {

    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);


    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem("watchlistMovies"));
        storedMovies.map(item => {
            fetch(`https://api.themoviedb.org/3/movie/${item}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => setMovies(old => old.concat(data)))
        })


        const storedTvShows = JSON.parse(localStorage.getItem("watchlistTV"));
        storedTvShows.map(item => {
            fetch(`https://api.themoviedb.org/3/tv/${item}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => setTvShows(old => old.concat(data)))
        })

    }, [])


    return (
        <div className="watch-list" >
            {movies.length === 0 ? "" :
                <div className="container" >
                    <div className="legend">
                        <h3>Movies Watchlist</h3>
                    </div>
                    <div className="items-container">
                        <MoviesContainer
                            movies={movies}
                            type="movie" />
                    </div>
                </div>
            }
            {tvShows.length === 0 ? "" :
                <div className="container" >
                    <div className="legend">
                        <h3>TV Shows Watchlist</h3>
                    </div>
                    <div className="items-container">
                        <MoviesContainer
                            movies={tvShows}
                            type="tv" />
                    </div>
                </div>
            }
        </div>
    )
}

export default WatchList;