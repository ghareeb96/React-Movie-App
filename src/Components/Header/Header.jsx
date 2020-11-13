import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import staticBg from "./static-bg.jpg"
import { AddToQueue, Star, Search, Grade } from '@material-ui/icons';

const Nav = () => {

    useEffect(() => {
        if (localStorage.getItem("favourites") === null) {
            localStorage.setItem("favourites", JSON.stringify([]));
        }
        if (localStorage.getItem("watchlist") === null) {
            localStorage.setItem("watchlist", JSON.stringify([]));
        }

    })
    return (

        <header>
            <div className="static-bg">
                <img src={staticBg} alt="" />
            </div>
            <nav>
                <div className="logo-container">
                    <Link className="links" to="/React-Movie-App/">
                        <div className="logo">
                            <h1><span>My</span>Mdb</h1>
                        </div>
                    </Link>
                    <div className="logo-slogan">
                        <p>Discover something new to Watch</p>
                    </div>
                </div>

                <ul>

                    <li>
                        <Link className="links" to="/search">
                            <i><Search className="icon" /></i>&nbsp;
                            Search
                        </Link>
                    </li>


                    <li>
                        <Link className="links" to="/topRated">
                            <i><Grade className="icon" /></i>&nbsp; Top Rated
                        </Link>
                    </li>


                    <li>
                        <Link className="links" to="/watchList">
                            <i><AddToQueue className="icon" /></i>&nbsp; Watch List
                        </Link>
                    </li>

                    <li>
                        <Link className="links" to="/favourites">
                            <i><Star className="icon" /></i>&nbsp; Favourites
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Nav;