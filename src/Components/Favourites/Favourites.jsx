import React, { useState, useEffect } from 'react'
import "./Favourites.scss";
import CardsContainer from '../CardsContainer/CardsContainer';
const api_key = "137436a3a883e2b94597a24e32d9d6b8";

const Favourites = () => {

    const [storedItems, setItem] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favourites"));
        stored.map(item => {
            fetch(`https://api.themoviedb.org/3/${item.type}/${item.id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => setItem(old => old.concat(data)))
        })
    }, [])

    return (
        <div className="favourites"  >
            {storedItems.length === 0 ? "" :
                <CardsContainer
                    items={storedItems}
                />
            }

        </div>
    )
}

export default Favourites;