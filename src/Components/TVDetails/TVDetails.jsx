import React, { useEffect, useState } from 'react'
import "./TVDetails.scss";

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const TVDetails = ({ match }) => {


    const [tvShow, getTvShow] = useState({});

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://api.themoviedb.org/3/tv/${match.params.id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => getTvShow(data))
        }
        fetchData();
    }, [])


    return (
        <div>
            <div className="img">
                <img src={`https://image.tmdb.org/t/p/w500${tvShow.backdrop_path}`} alt="lol" />
            </div>
        </div>
    )
}

export default TVDetails;