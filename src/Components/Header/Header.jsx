import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import staticBg from "./static-bg.jpg"
import { AddToQueue, LibraryAddCheck, Search, Grade } from '@material-ui/icons';




const Nav = () => {

    // window.addEventListener("scroll", () => {

    //     console.log(window.scrollY);
    //     console.log(window.pageYOffset);
    //     console.log(window.outerHeight);
    // })

    // const [source] = useState(Math.floor(Math.random() * 3));





    return (

        <header>
            {/* <div className="bg" id="header">
                <img
                    src={require(`./backgrounds/${source}.jpg`)}
                    alt="Background"
                />
            </div> */}
            <div className="static-bg">
                <img src={staticBg} alt="" />
            </div>
            <nav>
                <div className="logo-container">
                    <Link className="links" to="/">
                        <div className="logo">
                            <h1><span>My</span>Mdb</h1>
                        </div>
                    </Link>
                    <div className="logo-slogan">
                        <p>Discover something to Watch</p>
                    </div>
                </div>

                <ul>

                    {/* <li>
                        <Link className="links" to="/">
                            <i><Home className="icon" /></i>&nbsp; Home
                        </Link>
                    </li> */}


                    <li>
                        <Link className="links" to="/search">
                            <i><Search className="icon" /></i>&nbsp;
                            Search
                        </Link>
                    </li>


                    {/* <li>
                        <Link className="links" to="/trending">
                            <i><TrendingUp className="icon" /></i>&nbsp; Trinding
                        </Link>
                    </li> */}


                    <li>
                        <Link className="links" to="/top_rated">
                            <i><Grade className="icon" /></i>&nbsp; Top Rated
                        </Link>
                    </li>


                    <li>
                        <Link className="links" to="/watchList">
                            <i><AddToQueue className="icon" /></i>&nbsp; Watch List
                        </Link>
                    </li>

                    <li>
                        <Link className="links" to="/watchedList">
                            <i><LibraryAddCheck className="icon" /></i>&nbsp; Watched
                        </Link>
                    </li>
                </ul>

            </nav>
            {/* <a href="#header"><div className="back-to-top"> <ArrowUpward className="icon" /> </div></a> */}

            {/* <div className="divider"></div> */}
        </header>
    )
}

export default Nav;