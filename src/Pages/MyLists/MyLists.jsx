import React, { useEffect, useState } from 'react'
import Watchlist from "../../Components/WatchList/WatchList"
import Favourites from "../../Components/Favourites/Favourites"
import "./MyLists.scss";

const TopRated = ({ api_key }) => {
    const [activeSection, setActiveSection] = useState("watchlist");

    return (
        <div className="my-lists mt-70">

            <div className="container">

                <div className="filter-bar">
                    <ul>
                        <li className={activeSection === "watchlist" ? "category active" : "category"} ><button onClick={() => setActiveSection("watchlist")}>Watchlist</button></li>
                        <li className={activeSection === "favourites" ? "category active" : "category"} ><button onClick={() => setActiveSection("favourites")}>Favourites</button></li>
                    </ul>
                </div>

                {

                    activeSection === "watchlist" ?
                        <Watchlist
                            api_key={api_key}
                        />
                        :
                        <Favourites
                            api_key={api_key}
                        />
                }
            </div>

        </div>
    )
}

export default TopRated;