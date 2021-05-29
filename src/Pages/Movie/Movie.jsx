import React, { useEffect, useState } from 'react'
import "./Movie.scss";
// import { Link } from "react-router-dom";
// import { Planets } from 'react-preloaders';
import CardContainer from '../../Components/CardsContainer/CardsContainer';
import Slider from "../../Components/Slider/Slider"

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
                <div className="details-page movie-page">

                    <div className="details-container">
                        <div className="background static-bg">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
                            <div className="background-overlay"></div>
                        </div>

                        <div className="main-details">
                            <div className="left-section">
                                <div className="poster">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                </div>
                                <div className="btn-container">
                                    <button className={watchlisted ? "btn watchlist-btn btn-checked" : "btn watchlist-btn"} onClick={addToWatchlist}>{watchlisted ? "In Your Watchlist" : "Add To Watchlist"}</button>
                                    <button className={favourited ? "btn favourite-btn btn-checked" : "btn favourite-btn"} onClick={addToFav}>{favourited ? "Favourite" : "Add To Favourite"}</button>
                                </div>
                            </div>

                            <div className="right-section">
                                <div className="title">
                                    <h3>
                                        {`${movie.original_title}`}
                                        <span>{` (${movie.release_date.slice(0, 4)})`}</span>
                                    </h3>
                                </div>
                                <div className="genres">
                                    <ul>
                                        {movie.genres.map(item => {
                                            return (<li key={item.id} >{item.name}</li>)
                                        })}
                                    </ul>
                                </div>

                                {movie.tagline !== "" ?

                                    <div className="tagline">
                                        <h5>"{movie.tagline}"</h5>
                                    </div>

                                    :
                                    ""
                                }

                                {credits.length === 0 ? "" :
                                    <div className="cast">
                                        <div className="headline">
                                            <h5>Cast</h5>
                                        </div>
                                        <div id="cast-slider">

                                            <Slider
                                                items={credits} />
                                        </div>
                                    </div>
                                }


                                {/* {movie.overview ?
                                    <div className="overview">
                                        <div className="left">
                                            <h2>Overview</h2>
                                        </div>
                                        <div className="right">
                                            <p>{movie.overview}</p>
                                        </div>
                                    </div>
                                    : ""} */}
                            </div>

                        </div>





                        {/* <div >
                            <div>









                                {
                                    similar.length === 0 ? "" :
                                        <div className="similar">
                                            <div className="top">
                                                <h2>Similar</h2>
                                            </div>
                                            <div className="body">
                                                <CardContainer
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
                                                <CardContainer
                                                    items={recommends} />
                                            </div>
                                        </div>
                                }
                            </div>
                        </div> */}


                    </div>
                </div>

            </>

        )
    } else {
        return (
            <></>
        )
    }

}

export default Movies;