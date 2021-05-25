import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import Logo from "./Logo.png";
import { AddToQueue, Star, Search, Favorite } from '@material-ui/icons';

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
        <div className="header-container">
            <header>
                <div className="logo-container"><Link className="link" to="/React-Movie-App">
                    <img src={Logo} alt="Logo" />
                </Link>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search Here ..." id="search-input" />
                    <button id="search-btn">
                        <i><Search className="icon" /></i>
                    </button>

                </div>

                <div className="nav-links">

                    <ul>

                        <li>
                            <Link className="link" to="/TopRated">
                                <i><Star className="icon" /></i>&nbsp; Top Rated
                        </Link>
                        </li>


                        <li>
                            <Link className="link" to="/WatchList">
                                <i><AddToQueue className="icon" /></i>&nbsp; Watchlist
                        </Link>
                        </li>

                        <li>
                            <Link className="link" to="/Favourites">
                                <i><Favorite className="icon" /></i>&nbsp; Favourites
                        </Link>
                        </li>
                    </ul>
                </div>

            </header>
        </div>

    )
}

export default Nav;