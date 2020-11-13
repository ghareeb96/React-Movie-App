import React, { useState, useEffect } from 'react'
import "./Watchlist.scss";
import MoviesContainer from "../MoviesContainer/MoviesContainer"

const api_key = "137436a3a883e2b94597a24e32d9d6b8";

const WatchList = () => {

    const [storedItems, setItem] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("watchlist"));
        stored.map(item => {
            fetch(`https://api.themoviedb.org/3/${item.type}/${item.id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => setItem(old => old.concat(data)))
        })

    }, [])


    return (

        <div className="watchlist"  >
            {storedItems.length === 0 ? "" :
                <div className="container" >
                    <div className="legend">
                        <h3>Watchlist</h3>
                    </div>
                    <div className="items-container">
                        <MoviesContainer
                            movies={storedItems}
                        />
                    </div>
                </div>
            }

        </div>
    )
}

export default WatchList;