import React, { useEffect, useState } from 'react'
import "./Person.scss";
import CardContainer from '../../Components/CardsContainer/CardsContainer';
import Slider from "../../Components/Slider/Slider"
import { FavoriteBorder, Favorite } from '@material-ui/icons';

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const Persons = ({ match }) => {


    const [person, getPerson] = useState({});
    const [credits, setCredits] = useState([]);
    const [popular, setPopular] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [id, setId] = useState(match.params.id);


    useEffect(() => {
        setId(match.params.id);
    }, [match.params.id])

    const addToFav = () => {
        if (favourites.length === 0) {
            setFavourites(old => [...old, { id: match.params.id, type: "person" }]);
        } else {
            const found = favourites.filter(item => item.id === match.params.id)
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

    const getCredits = () => {
        const ids = [];
        setCredits([]);
        fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                data.cast.map((item) => {
                    if (ids.includes(item.id)) {
                        return
                    } else {
                        setCredits(prev => [...prev, item])
                        ids.push(item.id)
                    }
                })
            })
    }
    const getPopular = () => {
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setPopular(data.results))
    }

    useEffect(() => {

        if (localStorage.getItem("favourites") === null) {
            setFavourites([]);
        } else {
            setFavourites(JSON.parse(localStorage.getItem("favourites")))
        }
        fetchData();
        getCredits();
        getPopular();
    }, [id]);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

    if (credits) {

        return (
            <>

                <div className="details-page person-page">
                    <div className="details-container">

                        <div className="main-details">

                            <div className="left-section">
                                <div className="poster">
                                    <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt="" />
                                </div>
                                <div className="btn-container">
                                    <button className={favourited ? "btn favourite-btn btn-checked" : "btn favourite-btn"} onClick={addToFav}>
                                        {favourited ?
                                            <div className="btn-content"><Favorite className="icon" /><span> Favourite</span></div>
                                            : <div className="btn-content"><FavoriteBorder className="icon" /><span> Add To Favourite</span></div>
                                        }</button>                            </div>
                            </div>

                            <div className="right-section">

                                <div className="title">
                                    <h3>
                                        {person.name}
                                    </h3>
                                </div>

                                {
                                    person.biography ?
                                        <div className="bio">
                                            <div className="headline">
                                                <h6>Biography</h6>
                                            </div>
                                            <p>
                                                {person.biography}
                                            </p>
                                        </div>
                                        :

                                        ""
                                }


                            </div>
                        </div>

                        {
                            <div className="credits">
                                <div className="headline">
                                    <h5>Works</h5>
                                </div>
                                <CardContainer
                                    items={credits} />
                            </div>
                        }


                        {
                            <div className="popular">
                                <div className="headline">
                                    <h5>Popular Actors</h5>
                                </div>

                                <div className="popular-slider">
                                    <Slider
                                        items={popular} />
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </>

        )
    } else {
        return (
            <div className="person-details"></div>
        )
    }
}

export default Persons;