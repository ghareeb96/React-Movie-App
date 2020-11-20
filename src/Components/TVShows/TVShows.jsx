import React, { useEffect, useState, useRef } from 'react'
import "./TVShows.scss";
import { Link } from "react-router-dom";
import { Planets } from 'react-preloaders';
import ItemsContainer from '../ItemsContainer/ItemsContainer';

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const TVShows = ({ match }) => {


    const [tvShow, getTvShow] = useState({});
    const [credits, setCredits] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [season, setSeason] = useState({});
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
        // .then(setSeasons(tvShow.seasons))
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
    const getSeason = (season_no) => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/season/${season_no}?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setSeason({
                season: data,
                modal: true
            }))
        // .then(season => console.log(season))
    }
    let firstRender = true;
    useEffect(() => {
        if (firstRender) {
            firstRender = false;
        } else {
            getSeason();
        }
    }, [season])


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



    if (tvShow.seasons) {
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
                                        {`${tvShow.original_name}  (${tvShow.first_air_date.slice(0, 4)} - ${tvShow.last_air_date.slice(0, 4)})`}
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
                                            <ItemsContainer
                                                items={credits} />
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
                                                {tvShow.seasons.filter(item => (item.poster_path || item.profile_path))
                                                    .map(item => (
                                                        <div className="season" key={item.id} onClick={() =>
                                                            getSeason(item.season_number)
                                                        }>
                                                            <div className="img">
                                                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster" />
                                                                <div className="popup">
                                                                    <h2>
                                                                        {item.name}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                }

                                <div className={`modal-container ${season.modal ? "open" : "close"}`}>
                                    <div className="modal">

                                    </div>
                                    <div className="close-btn" onClick={() => setSeason(
                                        {
                                            modal: false
                                        })}>
                                        X
                                        </div>
                                </div>


                                {
                                    similar.length === 0 ? "" :
                                        <div className="similar">
                                            <div className="top">
                                                <h2>Similar</h2>
                                            </div>
                                            <div className="body">

                                                <ItemsContainer
                                                    items={similar} />
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
            <div className="tv-details">

            </div>
        )
    }
}


export default TVShows;