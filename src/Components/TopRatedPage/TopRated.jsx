import React, { useEffect, useState } from 'react'
import "./TopRated.scss";
import MoviesContainer from "../MoviesContainer/MoviesContainer"


const TopRated = () => {
    const api_key = "137436a3a883e2b94597a24e32d9d6b8";

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topRatedTV, setTopRatedTV] = useState([]);
    let movie_page = 1;
    let tv_page = 1;

    const get_top_movies = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${movie_page}`)
            .then(res => res.json())
            .then(data => {
                setTopRatedMovies(...topRatedMovies, data.results);
            })
        movie_page++;
    }

    const get_top_tv = (page) => {
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setTopRatedTV(...topRatedTV, data.results);
            })
    }
    // const inc_page = (movie_page) => {
    //     movie_page = movie_page + 1;
    // }

    useEffect(() => {
        get_top_movies(movie_page);
        get_top_tv(tv_page);
    }, [])

    // useEffect(() => {
    //     get_top_movies(movie_page);
    // }, [movie_page])

    // useEffect(() => {
    //     get_top_tv(tv_page);
    // }, [tv_page])


    return (
        <div className="top-rated" >

            <div className="container">
                <div className="legend">
                    <h3>Top Rated Movies</h3>
                </div>
                <div className="items-container">
                    <MoviesContainer movies={topRatedMovies} />
                </div>
                <button className="more" onClick={get_top_movies}>Load More ...</button>
            </div>
            <div className="divider"></div>
            <div className="container">
                <div className="legend">
                    <h3>Top Rated TV Shows</h3>
                </div>
                <div className="items-container">
                    <MoviesContainer movies={topRatedTV} />
                </div>
                <button className="more" >Load More ...</button>
            </div>
        </div>
    )
}

export default TopRated;