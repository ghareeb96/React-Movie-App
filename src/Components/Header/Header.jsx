import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
// import bg from "./0.jpg"

const Nav = () => {

    const source = () => {
        let src = Math.floor(Math.random() * 3)
        return ("./backgrounds/" + src + ".jpg");
    }

    return (
        <header>
            <div className="bg">
                <img
                    src={require(`${source()}`)}
                    alt="Background"
                />
            </div>
            <nav>
                <div className="logo-container">
                    <div className="logo">
                        <h1><span>My</span>Mdb</h1>
                    </div>
                </div>
                <ul>
                    <li><Link className="links" to="/">Home</Link></li>
                    <li><Link className="links" to="/watchList">WatchList</Link></li>
                    <li><Link className="links" to="/watchedList">WatchedList</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Nav;