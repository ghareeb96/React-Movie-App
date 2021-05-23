import React, { useState, useEffect } from 'react';
import "./homePage.scss";
import ItemsContainer from "../../Components/ItemsContainer/ItemsContainer"
import Slider from "../../Components/Slider/Slider"
import background from "./background.png"
import { ExpandMore } from '@material-ui/icons';
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
        <div className="home-page" >
            <div className="hero-section">

                <div className="background">
                    <img src={background} alt="bg" />
                </div>

                <div className="slogan">
                    <h1><span>Discover</span> something new to watch</h1>
                    <h2><span>Make</span> your own Watchlist</h2>
                </div>

                <button className="arrow">
                    <i><ExpandMore className="icon" /></i>
                </button>
            </div>

            <div className="trending-section">
                <div className="headline">
                    <h3>Trending This Week</h3>
                </div>
                {/* <ItemsContainer
                    items={trending}
                    scroll_type="movie" /> */}
                <Slider
                    items={trending} />
            </div>

        </div>
    )
}

export default HomePage;