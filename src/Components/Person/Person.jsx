import React, { useEffect, useState } from 'react'
import "./Person.scss";
import { Link } from "react-router-dom";
import { Planets } from 'react-preloaders';

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const Person = ({ match }) => {


    const [person, getPerson] = useState({});
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [id, setId] = useState(match.params.id);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setId(match.params.id);
    }, [match.params.id])

    const addToFav = () => {
        if (favourites.length === 0) {
            setFavourites(old => [...old, { id: match.params.id, type: "person" }]);
            // console.log(watched)
        } else {
            const found = favourites.filter(item => item.id === match.params.id)
            // console.log(found)
            if (found.length === 0) {
                setFavourites([...favourites, { id: match.params.id, type: "person" }])
                localStorage.setItem("favourites", JSON.stringify(favourites))
            } else {
                setFavourites(old => old.filter(item => item.id !== match.params.id))
                localStorage.setItem("favourites", JSON.stringify(favourites))
            }
        }
    }



    let favourited = false;
    favourites.map(item => {
        if (item.id === match.params.id) {
            favourited = true;
        }
    })

    const fetchData = () => {
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => getPerson(data))
    }

    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setMovies(data.crew))
    }

    const getTvShows = () => {
        fetch(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setTvShows(data.crew))
    }

    useEffect(() => {

        if (localStorage.getItem("favourites") === null) {
            setFavourites([]);
        } else {
            setFavourites(JSON.parse(localStorage.getItem("favourites")))
        }

        fetchData();
        getMovies();
        getTvShows();
    }, [id]);
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

    if (person.id) {
        return (
            <>
                <div className="person-details">
                    <div className="details">
                        <div className="bg-img">
                        </div>
                        <div className="left-section">
                            <div className="poster">
                                <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt="" />
                            </div>
                            <div className="btns">
                                <button className={favourited ? "favourite done" : "favourite"} onClick={addToFav}>{favourited ? "Favourite" : "Add To Favourite"}</button>
                            </div>
                        </div>

                        <div className="right-section">

                            {/* <div className="right-details">
                                <div className="title">
                                    <h1>
                                        {`${movie.title}  (${movie.release_date.slice(0, 4)})`}
                                    </h1>
                                </div>

                                {movie.tagline !== "" ?

                                    <div className="tagline">
                                        <h2>"{movie.tagline}"</h2>"
                                    </div>

                                    :
                                    ""
                                }


                                <div className="genres">
                                    <ul>
                                        {movie.genres.map(item => {
                                            return (<li key={item.id} >{item.name}</li>)
                                        })}
                                    </ul>
                                </div>
                                {movie.overview ?
                                    <div className="overview">
                                        <div className="left">
                                            <h2>Overview</h2>
                                        </div>
                                        <div className="right">
                                            <p>{movie.overview}</p>
                                        </div>
                                    </div>
                                    : ""}

                                {credits.length === 0 ? "" :
                                    <div className="cast">
                                        <div className="top">
                                            <h2>Cast</h2>
                                        </div>
                                        <div className="body">
                                            {credits
                                                .filter((item, index) => item.profile_path !== null && index < 12)
                                                .map((character) => {
                                                    return (
                                                        <div key={character.id} className="profile-container">
                                                            <img src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
                                                                alt="Profile" />
                                                            <div className="name">
                                                                <p>{character.name}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                }
                                {
                                    similar.length === 0 ? "" :
                                        <div className="similar">
                                            <div className="top">
                                                <h2>Similar</h2>
                                            </div>
                                            <div className="body">
                                                {similar
                                                    .filter((item, index) => item.poster_path !== null && index < 10)
                                                    .map((item) => {
                                                        return (
                                                            <Link key={item.id}
                                                                to={`/${item.first_air_date ? "TVDetails" : "movieDetails"}/${item.id}`}
                                                                onClick={() => setId(item.id)}>
                                                                <div className="container" >
                                                                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                                                        alt="Poster" />
                                                                    <div className="pop-up">
                                                                        <p>{item.title}</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })}
                                            </div>
                                        </div>
                                }

                                {
                                    recommends.length === 0 ? "" :
                                        <div className="recommends">
                                            <div className="top">
                                                <h2>Recommendations</h2>
                                            </div>
                                            <div className="body">
                                                {recommends
                                                    .filter((item, index) => item.poster_path !== null && index < 10)
                                                    .map((item) => {
                                                        return (
                                                            <Link key={item.id} to={`/${item.first_air_date ? "TVDetails" : "movieDetails"}/${item.id}`}
                                                                onClick={() => setId(item.id)}>
                                                                <div className="container">
                                                                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                                                        alt="Poster" />
                                                                    <div className="pop-up">
                                                                        <p>{item.title}</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })}
                                            </div>
                                        </div>
                                }
                            </div> */}
                        </div>


                    </div>
                </div>
                <Planets
                    color="#fdc325"
                    background="#011A27"
                    // customLoading={loading}
                    time={2000} />
            </>

        )
    } else {
        return (
            <div className="person-details"></div>
        )
    }
}

export default Person;