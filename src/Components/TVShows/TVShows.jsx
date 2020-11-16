import React, { useEffect, useState } from 'react'
import "./TVShows.scss";
import { Link } from "react-router-dom";
import { Planets } from 'react-preloaders';

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const TVShows = ({ match }) => {


    const [tvShow, getTvShow] = useState({});
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
            setFavourites(old => [...old, { id: match.params.id, type: "tv" }]);
        } else {
            const found = favourites.filter(item => item.id === match.params.id)
            if (found.length === 0) {
                setFavourites([...favourites, { id: match.params.id, type: "tv" }])
                localStorage.setItem("favourites", JSON.stringify(favourites))
            } else {
                setFavourites(old => old.filter(item => item.id !== match.params.id))
                localStorage.setItem("favourites", JSON.stringify(favourites))
            }
        }
    }
    const addToWatchlist = () => {
        if (watchlist.length === 0) {
            setWatchlist(old => [...old, { id: match.params.id, type: "tv" }]);
        } else {
            const found = watchlist.filter(item => item.id === match.params.id)
            if (found.length === 0) {
                setWatchlist([...watchlist, { id: match.params.id, type: "tv" }])
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
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => getTvShow(data))
    }

    const getCredits = () => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setCredits(data.cast))
    }

    const getSimilar = () => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setSimilar(data.results))
    }

    const getRecommends = () => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${api_key}`)
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
    }, [id])
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist))
    }, [watchlist])



    if (tvShow.genres) {
        return (
            <>
                <div className="tv-details">
                    <div className="details">
                        <div className="bg-img">
                            <img src={`https://image.tmdb.org/t/p/w500${tvShow.backdrop_path}`} />
                        </div>
                        <div className="left-section">
                            <div className="poster">
                                <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt="" />
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
                                        {`${tvShow.name}  (${tvShow.first_air_date.slice(0, 4)} - ${tvShow.last_air_date.slice(0, 4)})`}
                                    </h1>
                                </div>


                                <div className="genres">
                                    <ul>
                                        {tvShow.genres.map(item => {
                                            return (<li key={item.id} >{item.name}</li>)
                                        })}
                                    </ul>
                                </div>
                                {tvShow.overview ?
                                    <div className="overview">
                                        <div className="left">
                                            <h2>Overview</h2>
                                        </div>
                                        <div className="right">
                                            <p>{tvShow.overview}</p>
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
                                                .filter((item, index) => item.profile_path !== null && index < 14)
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
                                    tvShow.seasons.length === 0 ? "" :
                                        <div className="seasons">
                                            <div className="top">
                                                <h2>Seasons</h2>
                                            </div>
                                            <div className="body">
                                                {tvShow.seasons
                                                    .filter((item) => item.poster_path !== null)
                                                    .map((item) => {
                                                        return (
                                                            // <Link to={`/${item.first_air_date ? "TVDetails" : "movieDetails"}/${item.id}`} >
                                                            <div key={item.id} className="container" >
                                                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                                                    alt="Poster" />
                                                                <div className="pop-up">
                                                                    <p>{item.name}</p>
                                                                </div>
                                                            </div>
                                                            /* </Link> */
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
                                                            <Link key={item.id} to={`/${item.first_air_date ? "TVDetails" : "movieDetails"}/${item.id}`}
                                                                onClick={() => setId(item.id)}>
                                                                <div className="container" >
                                                                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                                                        alt="Poster" />
                                                                    <div className="pop-up">
                                                                        <p>{item.name}</p>
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
                                                                        <p>{item.name}</p>
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
                <Planets
                    color="#fdc325"
                    background="#011A27"
                    customLoading={loading}
                    time={2000} />
            </>
        )
    } else {
        return (
            <div className="movie-details"></div>
        )
    }
}


export default TVShows;