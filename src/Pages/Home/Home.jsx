import React, { useState, useEffect } from 'react';
import "./Home.scss";
import CardsContainer from "../../Components/CardsContainer/CardsContainer"
import Slider from "../../Components/Slider/Slider"
import background from "./background.png"


const HomePage = ({api_key}) => {

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
    }


    useEffect(() => {
        get_popular_movies();
        get_popular_TV();
        get_trends();
    }, []);



    return (
        <div className="home-page mt-70" >

            <div className="hero-section">
                <div className="background">
                    <img src={background} alt="bg" />
                </div>
                <div className="container">
                    <div className="slogan">
                        <h1><span>Discover</span> something new to watch</h1>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="section" id="trending-section">
                    <div className="headline">
                        <h3>Trending This Week</h3>
                    </div>
                    <div id="trending-slider">
                        <Slider
                            items={trending}
                            container= 'trending-slider'
                            fullWidth = {true}
                            />
                    </div>
                </div>
                <div className="section" id="top-movies">
                    <div className="headline">
                        <h3>Popular Movies</h3>
                    </div>
                    <CardsContainer
                        items={popularMovies}
                    />
                </div>
                <div className="section" id="top-series">
                    <div className="headline">
                        <h3>Popular Tv Shows</h3>
                    </div>
                    <CardsContainer
                        items={popularTV}
                    />
                </div>


            </div>

        </div>
    )
}

export default HomePage;