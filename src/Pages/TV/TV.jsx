import React, { useEffect, useState } from 'react'
import "./TV.scss";
import { FavoriteBorder, Favorite, Queue, LibraryAddCheck } from '@material-ui/icons';
import CardContainer from '../../Components/CardsContainer/CardsContainer';
import Slider from "../../Components/Slider/Slider"

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
    }
    const getSeason = (season_no) => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/season/${season_no}?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setSeason({
                season: data,
                modal: true
            }))
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

                <div className="details-page tv-page">

                    <div className="details-container">
                        <div className="background static-bg">
                            <img src={`https://image.tmdb.org/t/p/w500${tvShow.backdrop_path}`} />
                            <div className="background-overlay"></div>
                        </div>

                        <div className="main-details">
                            <div className="left-section">
                                <div className="poster">
                                    <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt="" />
                                </div>

                                <div className="btn-container">
                                    <button className={watchlisted ? "btn watchlist-btn btn-checked" : "btn watchlist-btn"} onClick={addToWatchlist}>
                                        {watchlisted ?
                                            <div className="btn-content"><LibraryAddCheck className="icon" /><span> Watchlist</span></div>
                                            : <div className="btn-content"><Queue className="icon" /><span> Add To Watchlist</span></div>}</button>
                                    <button className={favourited ? "btn favourite-btn btn-checked" : "btn favourite-btn"} onClick={addToFav}>
                                        {favourited ?
                                            <div className="btn-content"><Favorite className="icon" /><span> Favourite</span></div>
                                            : <div className="btn-content"><FavoriteBorder className="icon" /><span> Add To Favourite</span></div>
                                        }</button>
                                </div>
                            </div>

                            <div className="right-section">

                                <div className="title">
                                    <h3>
                                        {`${tvShow.original_name}`}
                                        <span>{` (${tvShow.first_air_date.slice(0, 4)} - ${tvShow.last_air_date.slice(0, 4)})`}</span>
                                    </h3>

                                </div>

                                <div className="genres">
                                    <ul>
                                        {tvShow.genres.map(item => {
                                            return (<li key={item.id} >{item.name}</li>)
                                        })}
                                    </ul>
                                </div>


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

                                {tvShow.overview ?
                                    <div className="overview">
                                        <p>{tvShow.overview}</p>
                                    </div>
                                    : ""}
                                {/* {
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

                                } */}



                                {/* <div className={`modal-container ${season.modal ? "open" : "close"}`} onClick={(e) => (e.target.classList.contains("open")) ? setSeason({ modal: false }) : ""}>
                                    {season.season ?
                                        <div className="modal">
                                            <div className="close-btn" onClick={() => setSeason({ modal: false })}><CloseIcon className="close-icon" /></div>
                                            <div className="modal-details">
                                                <div className="season-title">
                                                    <h1>{season.season.name}</h1>
                                                </div>
                                                <div className="middle">
                                                    <div className="img">
                                                        <img src={`https://image.tmdb.org/t/p/w500${season.season.poster_path}`} alt="" />
                                                    </div>
                                                    <div className="episodes">
                                                        <h1>Episodes</h1>
                                                        <ul>
                                                            {season.season.episodes.map((item, index) => (
                                                                <li>{`${index + 1} : ${item.name}`}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                {season.season.overview ?
                                                    <div className="season-overview">
                                                        <p>{season.season.overview}</p>
                                                    </div>
                                                    : ""}
                                            </div>
                                        </div>
                                        : ""}
                                </div> */}





                            </div>
                        </div>

                    </div>


                    {
                        similar.length === 0 ? "" :
                            <div className="section similar-section">
                                <div className="headline">
                                    <h4>Similar</h4>
                                </div>
                                <CardContainer
                                    items={similar}
                                />
                            </div>
                    }

                    {
                        recommends.length === 0 ? "" :
                            <div className="section recommends-section">
                                <div className="headline">
                                    <h4>Recommendations</h4>
                                </div>
                                <CardContainer
                                    items={recommends} />
                            </div>
                    }
                </div>
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