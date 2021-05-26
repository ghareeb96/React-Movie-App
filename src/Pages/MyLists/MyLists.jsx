import React, { useEffect, useState } from 'react'
import Watchlist from "../../Components/WatchList/WatchList"
import Favourites from "../../Components/Favourites/Favourites"
import "./MyLists.scss";

const TopRated = () => {
    const [activeSection, setActiveSection] = useState("watchlist");

    return (
        <div className="my-lists">
            <div className="filter-bar">
                <ul>
                    <li className={activeSection === "watchlist" ? "category active" : "category"} ><button onClick={() => setActiveSection("watchlist")}>Watchlist</button></li>
                    <li className={activeSection === "favourites" ? "category active" : "category"} ><button onClick={() => setActiveSection("favourites")}>Favourites</button></li>
                </ul>

                {
                    activeSection === "watchlist" ?
                        <Watchlist />
                        :
                        <Favourites />
                }
            </div>

        </div>


    )
}

export default TopRated;