import React, { useEffect, useState } from 'react'
import "./Movie.scss";
import { Link } from "react-router-dom";
import { Planets } from 'react-preloaders';
// import ItemsContainer from '../ItemsContainer/ItemsContainer';

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const Movies = ({ match }) => {


    const [movie, getMovie] = useState({});
    const [credits, setCredits] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [recommends, setRecommends] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const [id, setId] = useState(match.params.id);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setId(match.params.id);
    }, [match.params.id])

    const addToFav = () => {
        if (favourites.length === 0) {
            setFavourites(old => [...old, { id: match.params.id, type: "movie" }]);
        } else {
            const found = favourites.filter(item => item.id === match.params.id)
            if (found.length === 0) {
                setFavourites([...favourites, { id: match.params.id, type: "movie" }])
                localStorage.setItem("favourites", JSON.stringify(favourites))
            } else {
                setFavourites(old => old.filter(item => item.id !== match.params.id))
                localStorage.setItem("favourites", JSON.stringify(favourites))
            }
        }
    }
    const addToWatchlist = () => {
        if (watchlist.length === 0) {
            setWatchlist(old => [...old, { id: match.params.id, type: "movie" }]);
        } else {
            const found = watchlist.filter(item => item.id === match.params.id)
            if (found.length === 0) {
                setWatchlist([...watchlist, { id: match.params.id, type: "movie" }])
                localStorage.setItem("watchlist", JSON.stringify(watchlist))
            } else {
                setWatchlist(old => old.filter(item => item.id !== match.params.id))
                localStorage.setItem("watchlist", JSON.stringify(watchlist))
            }
        }
    }

    let watchlisted = false;
    watchlist.map(item => {
        if (item.id === match.params.id) {
            watchlisted = true;
        }
    })

    let favourited = false;
    favourites.map(item => {
        if (item.id === match.params.id) {
            favourited = true;
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
            .then(setLoading(false))
    }

    useEffect(() => {

        if (localStorage.getItem("favourites") === null) {
            setFavourites([]);
        } else {
            setFavourites(JSON.parse(localStorage.getItem("favourites")))
        }

        if (localStorage.getItem("watchlist") === null) {
            setWatchlist([]);
        } else {
            setWatchlist(JSON.parse(localStorage.getItem("watchlist")))
        }

        fetchData();
        getCredits();
        getSimilar();
        getRecommends();
    }, [id]);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist))
    }, [watchlist])

    if (movie.genres) {
        return (
            <>
                {/* <div className="movie-details">
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
                                <button className={favourited ? "favourite done" : "favourite"} onClick={addToFav}>{favourited ? "Favourite" : "Add To Favourite"}</button>
                            </div>
                        </div>

                        <div className="right-section">

                            <div className="right-details">
                                <div className="title">
                                    <h1>
                                        {`${movie.original_title}  (${movie.release_date.slice(0, 4)})`}
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
                                            <ItemsContainer
                                                items={credits} />
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
                                                <ItemsContainer
                                                    items={similar}
                                                />
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
                                                <ItemsContainer
                                                    items={recommends} />
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>


                    </div>
                </div> */}

            </>

        )
    } else {
        return (
            <></>
        )
    }

}

export default Movies;