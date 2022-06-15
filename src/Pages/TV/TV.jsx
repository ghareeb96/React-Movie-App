import React, { useEffect, useState } from 'react'
import {ReactComponent as FavoriteBorder} from './FavoriteBorder.svg'
import {ReactComponent as Favorite} from './Favorite.svg'
import {ReactComponent as Queue} from './Queue.svg'
import {ReactComponent as LibraryAddCheck} from './LibraryAddCheck.svg'
import CardContainer from '../../Components/CardsContainer/CardsContainer';
import Slider from "../../Components/Slider/Slider"



const TVShows = ({ match, api_key }) => {


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
        window.scrollTo(0, 0)
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

                <div className="details-page tv-page mt-70">

                    <div className="details-container">
                        <div className="background static-bg">
                            <img src={`https://image.tmdb.org/t/p/w500${tvShow.backdrop_path}`} />
                            <div className="background-overlay"></div>
                        </div>

                        <div className="container">

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
                                                    items={credits}
                                                    container='cast-slider'
                                                    fullWidth={false} />
                                            </div>
                                        </div>


                                    }

                                    {tvShow.overview ?
                                        <div className="overview">
                                            <p>{tvShow.overview}</p>
                                        </div>
                                        : ""}
                                    {
                                        tvShow.seasons.length === 0 ? "" :
                                            <div className="seasons">
                                                <div className="headline">
                                                    <h6>
                                                        Seasons
                                                    </h6>
                                                </div>
                                                <div className="seasons-container">

                                                    {tvShow.seasons.filter(item => (item.poster_path))
                                                        .map(item => (
                                                            <div className="season" key={item.id}>
                                                                <div className="img">
                                                                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster" />
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                    }
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
                    </div>

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