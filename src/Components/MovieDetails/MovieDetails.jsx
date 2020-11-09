import React, { useEffect, useState } from 'react'
import "./MovieDetails.scss";
import { Link } from "react-router-dom";

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const MovieDetails = ({ match }) => {


    const [movie, getMovie] = useState({});
    const [credits, setCredits] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [recommends, setRecommends] = useState([]);
    const [watched, setWatched] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const [id, setId] = useState(match.params.id);


    useEffect(() => {
        setId(match.params.id);
    })

    const addToWatched = () => {
        if (watched.length === 0) {
            setWatched(old => [...old, match.params.id]);
            // console.log(watched)
        } else {
            const found = watched.filter(item => item === match.params.id)
            // console.log(found)
            if (found.length === 0) {
                setWatched([...watched, match.params.id])
                localStorage.setItem("watchedMovies", JSON.stringify(watched))
            } else {
                setWatched(old => old.filter(item => item !== match.params.id))
                localStorage.setItem("watchedMovies", JSON.stringify(watched))
            }
        }
    }
    const addToWatchlist = () => {
        if (watchlist.length === 0) {
            setWatchlist(old => [...old, match.params.id]);
            // console.log(watched)
        } else {
            const found = watchlist.filter(item => item === match.params.id)
            // console.log(found)
            if (found.length === 0) {
                setWatchlist([...watchlist, match.params.id])
                localStorage.setItem("watchlistMovies", JSON.stringify(watchlist))
            } else {
                setWatchlist(old => old.filter(item => item !== match.params.id))
                localStorage.setItem("watchlistMovies", JSON.stringify(watchlist))
            }
        }
    }

    let watchlisted = false;
    watchlist.map(item => {
        if (item === match.params.id) {
            watchlisted = true;
        }
    })

    let watchedlisted = false;
    watched.map(item => {
        if (item === match.params.id) {
            watchedlisted = true;
        }
    })

    const fetchData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => getMovie(data))
    }

    const getCredits = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setCredits(data.cast))
    }

    const getSimilar = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setSimilar(data.results))
    }

    const getRecommends = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setRecommends(data.results))
    }

    useEffect(() => {

        if (localStorage.getItem("watchedMovies") === null) {
            setWatched([]);
        } else {
            setWatched(JSON.parse(localStorage.getItem("watchedMovies")))
        }

        if (localStorage.getItem("watchlistMovies") === null) {
            setWatchlist([]);
        } else {
            setWatchlist(JSON.parse(localStorage.getItem("watchlistMovies")))
        }

        fetchData();
        getCredits();
        getSimilar();
        getRecommends();
    }, [id]);
    useEffect(() => {
        localStorage.setItem("watchedMovies", JSON.stringify(watched))
    }, [watched])
    useEffect(() => {
        localStorage.setItem("watchlistMovies", JSON.stringify(watchlist))
    }, [watchlist])

    if (movie.genres) {
        return (
            <div className="movie-details">
                <div className="details">
                    <div className="bg-img">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
                    </div>
                    <div className="left-section">
                        <div className="poster">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                        </div>
                        <div className="btns">
                            <button className={watchlisted ? "watch-list done" : "watch-list"} onClick={addToWatchlist}>{watchlisted ? "In Your Watchlist" : "Add To Watchlist"}</button>
                            <button className={watchedlisted ? "watched-list done" : "watched-list"} onClick={addToWatched}>{watchedlisted ? "Watched" : "Add To Watchedlist"}</button>
                        </div>
                    </div>

                    <div className="right-section">

                        <div className="right-details">
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
                            <div className="overview">
                                <div className="left">
                                    <h2>Overview</h2>
                                </div>
                                <div className="right">
                                    <p>{movie.overview}</p>
                                </div>
                            </div>

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
                        </div>
                    </div>


                </div>
            </div>
        )
    } else {
        return (
            <div className="movie-details"></div>
        )
    }
}

export default MovieDetails;