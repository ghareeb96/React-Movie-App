import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.scss";
import Logo from "./Logo.png";
import { ArrowUpward, Star, Search, List, Menu } from '@material-ui/icons';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Nav = () => {

    useEffect(() => {
        if (localStorage.getItem("favourites") === null) {
            localStorage.setItem("favourites", JSON.stringify([]));
        }
        if (localStorage.getItem("watchlist") === null) {
            localStorage.setItem("watchlist", JSON.stringify([]));
        }

    })
    let header = useRef(null)
    let headerContainer = useRef(null)

    useEffect(() => {
        gsap.to(header, {
            scrollTrigger: {
                trigger: header,
                toggleClass: "show-btn",
                start: "bottom+=100 top",
                end: "bottom+=100000"
            }
        })
    })

    const hideNav = () => {
        if (headerContainer.classList.contains("active-header")) {
            headerContainer.classList.remove("active-header");
        }
    }
    return (
        <div className="header-container" id="header" ref={el => (headerContainer = el)}>
            <header ref={el => (header = el)}>
                <div className="back-to-top">
                    <a className="btn" href="#header">
                        <i>
                            <ArrowUpward className="icon" />
                        </i>
                    </a>
                </div>
                <div className="logo-container"><NavLink className="link" to="/React-Movie-App" onClick={hideNav}>
                    <img src={Logo} alt="Logo" />
                </NavLink>
                </div>


                <div className="nav-links">

                    <ul>

                        <li>
                            <NavLink className="link" to="/Search" onClick={hideNav}>
                                <i><Search className="icon" /></i>&nbsp; Search
                        </NavLink>
                        </li>

                        <li>
                            <NavLink className="link" to="/TopRated" onClick={hideNav}>
                                <i><Star className="icon" /></i>&nbsp; Top Rated
                        </NavLink>
                        </li>

                        <li>
                            <NavLink className="link" to="/MyLists" onClick={hideNav}>
                                <i><List className="icon" /></i>&nbsp; My Lists
                        </NavLink>
                        </li>

                        <li>
                            <Link className="link sign-in" to="/SignIn" onClick={hideNav}>
                                <button disabled className="btn sign-in-btn">
                                    Sign In
                            </button>
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className="menu-btn" onClick={() => headerContainer.classList.toggle("active-header")}>
                    <Menu className="icon menu-icon" id="menu-icon" />
                </div>
            </header>
        </div>

    )
}

export default Nav;