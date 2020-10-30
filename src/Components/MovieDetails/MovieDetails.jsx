import React, { useEffect, useState } from 'react'
import "./MovieDetails.scss";

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const MovieDetails = ({ match }) => {


    const [movie, getMovie] = useState({});

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => getMovie(data))
        }
        fetchData();
    }, [])



    return (
        <div>
            <div className="img">
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="lol" />
            </div>
        </div>
    )
}

export default MovieDetails;