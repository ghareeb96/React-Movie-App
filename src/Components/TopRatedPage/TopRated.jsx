import React, { useEffect, useState } from 'react'

import "./TopRated.scss";
import MoviesContainer from "../MoviesContainer/MoviesContainer"



const TopRated = () => {
    const api_key = "137436a3a883e2b94597a24e32d9d6b8";

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topRatedTV, setTopRatedTV] = useState([]);
    const [movie_page, setMoviePage] = useState(1);
    const [tv_page, setTVPage] = useState(1);






    useEffect(() => {
        const get_top_movies = () => {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${movie_page}`)
                .then(res => res.json())
                .then(data => {
                    setTopRatedMovies(oldArray => oldArray.concat(data.results));
                })

        }
        get_top_movies();
    }, [movie_page]);

    useEffect(() => {
        const get_top_tv = () => {
            fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&page=${tv_page}`)
                .then(res => res.json())
                .then(data => {
                    setTopRatedTV(oldArray => oldArray.concat(data.results));
                })
        }
        get_top_tv();
    }, [tv_page]);


    return (
        <div className="top-rated" >

            <div className="container" id="movieContainer">
                <div className="legend">
                    <h3>Top Rated Movies</h3>
                </div>
                <div className="items-container">
                    <MoviesContainer
                        movies={topRatedMovies}
                        type="movie" />
                </div>
                <div className="more">
                    <a href="#movie" onClick={() => setMoviePage(movie_page + 1)}>Load More</a>
                </div>
            </div>

            <div className="divider"></div>

            <div id="tvContainer" className="container">
                <div className="legend">
                    <h3>Top Rated TV Shows</h3>
                </div>
                <div className="items-container">
                    <MoviesContainer
                        movies={topRatedTV}
                        type="tv" />
                </div>
                <div className="more">
                    <a href="#tv" onClick={() => setTVPage(tv_page + 1)}>Load More</a>
                </div>
            </div>
        </div>
    )
}

export default TopRated;