import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.scss";
import Logo from "./Logo.png";
import { ArrowUpward, Star, Search, List } from '@material-ui/icons';

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
        <div className="header-container" id="header">
            <header>
                <div className="logo-container"><NavLink className="link" to="/React-Movie-App">
                    <img src={Logo} alt="Logo" />
                </NavLink>
                </div>


                <div className="nav-links">

                    <ul>

                        <li>
                            <NavLink className="link" to="/Search">
                                <i><Search className="icon" /></i>&nbsp; Search
                        </NavLink>
                        </li>

                        <li>
                            <NavLink className="link" to="/TopRated">
                                <i><Star className="icon" /></i>&nbsp; Top Rated
                        </NavLink>
                        </li>

                        <li>
                            <NavLink className="link" to="/MyLists">
                                <i><List className="icon" /></i>&nbsp; My Lists
                        </NavLink>
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
            <div className="back-to-top">
                <a className="btn" href="#header">
                    <i>
                        <ArrowUpward className="icon" />
                    </i>
                </a>
            </div>
        </div>

    )
}

export default Nav;