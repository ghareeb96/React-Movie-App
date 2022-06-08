import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.scss";
import Logo from "./Logo.png";
import { ReactComponent as Search } from './search.svg'
import { ReactComponent as ArrowUp } from './arrow-up.svg'
import { ReactComponent as Star } from './star.svg'
import { ReactComponent as List } from './list.svg'
import { ReactComponent as Menu } from './menu.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Nav = () => {


    let nav = useRef(null)
    let arrow = useRef(null)


    const toggleSidebar = () => {
        const headerElement = document.getElementById("header");
        headerElement.classList.toggle("open");
    }

    const closeSidebar = (e) => {
        const headerElement = document.getElementById("header");
        if (!e.target.classList.contains("nav-links") && headerElement.classList.contains("open")) {
            headerElement.classList.remove("open");
        }
    }



    useEffect(() => {
        gsap.to(arrow.current, {
            scrollTrigger: {
                trigger: arrow.current,
                toggleClass: "show-btn",
                start: "bottom top",
                end: "bottom+=100000"
            }
        })
    })


    return (
        <header id="header" ref={nav}>
            <div className="container">

                <div className="logo-container">
                    <NavLink className="link" to="/React-Movie-App">
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                </div>

                <nav ref={el => (nav = el)} onClick={closeSidebar}>


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

                        </ul>
                    </div>

                    <div className="back-to-top" ref={arrow}>
                        <a href="#header">
                            <i>
                                <ArrowUp className="icon" />
                            </i>
                        </a>
                    </div>
                </nav>

                <div className="menu-btn" onClick={toggleSidebar}>
                    <Menu className="icon menu-icon" id="menu-icon" />
                </div>
            </div>
        </header>

    )
}

export default Nav;