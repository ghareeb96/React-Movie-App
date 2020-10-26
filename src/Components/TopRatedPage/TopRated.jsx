import React, { useEffect, useState } from 'react'
import "./TopRated.scss";
import MoviesContainer from "../MoviesContainer/MoviesContainer"


const TopRated = () => {

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topRatedTV, setTopRatedTV] = useState([]);
    const movie_page = 1;
    const tv_page = 1;

    const get_top_movies = (page) => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setTopRatedMovies(...topRatedMovies, data.results);
            })
    }

    const get_top_tv = (page) => {
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setTopRatedTV(...topRatedTV, data.results);
            })
    }

    useEffect(() => {
        get_top_movies(movie_page);
        get_top_tv(tv_page);
    }, [])

    useEffect(() => {
        get_top_movies(movie_page);
    }, [movie_page])

    useEffect(() => {
        get_top_tv(tv_page);
    }, [tv_page])


    return (
        <div className="top-rated" >

            <div className="container">
                <div className="items-container">
                    <MoviesContainer movies={topRatedMovies} />
                </div>
                <button className="more" onClick={movie_page++}>Load More ...</button>
            </div>

            <div className="container">
                <div className="items-container">
                    <MoviesContainer movies={topRatedTV} />
                </div>
                <button className="more" onClick={tv_page++}>Load More ...</button>
            </div>
        </div>
    )
}

export default TopRated;