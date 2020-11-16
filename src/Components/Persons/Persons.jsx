import React, { useEffect, useState } from 'react'
import "./Persons.scss";
import { Link } from "react-router-dom";
import { Planets } from 'react-preloaders';

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const Persons = ({ match }) => {


    const [person, getPerson] = useState({});
    const [credits, setCredits] = useState([]);
    const [popular, setPopular] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [id, setId] = useState(match.params.id);
    const [loading, setLoading] = useState(true)


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
            .then(setLoading(false))
    }

    const getCredits = () => {
        fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setCredits(data.cast))
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

                            <div className="right-details">
                                <div className="title">
                                    <h1>
                                        {person.name}
                                    </h1>
                                </div>





                                {
                                    <div className="similar">
                                        <div className="top">
                                            <h2>Credits</h2>
                                        </div>
                                        <div className="body">
                                            {credits
                                                .filter(item => item.poster_path !== null)
                                                .map((item) => {
                                                    return (
                                                        <Link key={item.id}
                                                            to={`/${item.first_air_date ? "TVDetails" : "movieDetails"}/${item.id}`}
                                                            onClick={() => setId(item.id)}>
                                                            <div className="container" >
                                                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                                                    alt="Poster" />
                                                                <div className="pop-up">
                                                                    <p>{item.first_air_date ? item.name : item.title}</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                }


                                {
                                    <div className="popular">
                                        <div className="top">
                                            <h2>Popular Persons</h2>
                                        </div>
                                        <div className="body">
                                            {popular
                                                .filter(item => item.poster_path !== null)
                                                .map((item) => {
                                                    return (
                                                        <Link key={item.id}
                                                            to={`/Person/${item.id}`}
                                                            onClick={() => setId(item.id)}>
                                                            <div className="container" >
                                                                <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
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
            <div className="person-details"></div>
        )
    }
}

export default Persons;