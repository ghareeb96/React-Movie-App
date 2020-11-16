import React, { useState, useEffect } from 'react';
import "./homePage.scss";
import ItemsContainer from "../ItemsContainer/ItemsContainer"
import { Planets } from 'react-preloaders';

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const api_key = "137436a3a883e2b94597a24e32d9d6b8";

    //* =============Popular Movies====================
    const [popularMovies, setPopularMovies] = useState([]);
    const get_popular_movies = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }

    //* ==============Popular TV Shows =======================
    const [popularTV, setPopularTV] = useState([]);
    const get_popular_TV = () => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setPopularTV(data.results))
    }

    //* ================Trending =============================
    const [trending, setTrending] = useState([]);
    const get_trends = () => {
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setTrending(data.results))
            .then(setLoading(false))
    }


    useEffect(() => {
        get_popular_movies();
        get_popular_TV();
        get_trends();
    }, []);


    return (
        <>
            <div className="home-page" >

                <div className="slogan">
                    <h2>Welcome To MyMdb</h2>
                    <h2>Discover, Search and Make Your Watchlist</h2>
                </div>

                <div className="container">
                    <div className="legend">
                        <h3>Popular Movies</h3>
                    </div>
                    <div className="items-container">
                        <ItemsContainer items={popularMovies} />
                    </div>
                </div>

                <div className="divider"></div>

                <div className="container">
                    <div className="legend">
                        <h3>Popular TV Shows</h3>
                    </div>
                    <div className="items-container">
                        <ItemsContainer items={popularTV} />
                    </div>
                </div>

                <div className="divider"></div>

                <div className="container">
                    <div className="legend">
                        <h3>Trending This Week</h3>
                    </div>
                    <div className="items-container">
                        <ItemsContainer items={trending} />
                    </div>
                </div>
            </div>
            <Planets
                color="#fdc325"
                background="#011A27"
                customLoading={loading} />
        </>
    )
}

export default HomePage;