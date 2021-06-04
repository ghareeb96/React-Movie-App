import React, { useState, useEffect, useRef } from 'react';
import "./Home.scss";
import CardsContainer from "../../Components/CardsContainer/CardsContainer"
import Slider from "../../Components/Slider/Slider"
import background from "./background.png"
import { ExpandMore } from '@material-ui/icons';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
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
    }


    useEffect(() => {
        get_popular_movies();
        get_popular_TV();
        get_trends();
    }, []);

    let arrow = useRef(null)
    useEffect(() => {
        gsap.fromTo(arrow, {
            y: 0,
            opacity: 0.5
        },
            {
                y: 40,
                opacity: 1,
                repeat: -1,
                duration: 2,
                delay: 0.5,
                ease: gsap.linear
            })
    })


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

                <a href="#trending-section" className="arrow" ref={el => (arrow = el)}>
                    <i><ExpandMore className="icon" /></i>
                </a>
            </div>

            <div className="section" id="trending-section">
                <div className="headline">
                    <h3>Trending This Week</h3>
                </div>
                <div id="trending-slider">
                    <Slider
                        items={trending} />
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
    )
}

export default HomePage;