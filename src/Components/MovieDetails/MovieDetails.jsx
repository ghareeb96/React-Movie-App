import React, { useEffect, useState } from 'react'
import "./MovieDetails.scss";

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const MovieDetails = ({ match }) => {


    const [movie, getMovie] = useState({});

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => console.log(data))
        }
        fetchData()
    }, [])


    console.log(match.params.id)
    return (
        <div>

        </div>
    )
}

export default MovieDetails;