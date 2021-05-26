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


                <div className="nav-links">

                    <ul>

                        <li>
                            <Link className="link" to="/Search">
                                <i><Search className="icon" /></i>&nbsp; Search
                        </Link>
                        </li>

                        <li>
                            <Link className="link" to="/TopRated">
                                <i><Star className="icon" /></i>&nbsp; Top Rated
                        </Link>
                        </li>

                        <li>
                            <Link className="link" to="/MyLists">
                                <i><Favorite className="icon" /></i>&nbsp; My Lists
                        </Link>
                        </li>

                        <li>
                            <Link className="link sign-in" to="/SignIn">
                                <button className="btn sign-in-btn">
                                    Sign In
                            </button>
                            </Link>
                        </li>

                    </ul>
                </div>

            </header>
        </div>

    )
}

export default Nav;