import React, { useEffect, useState } from 'react'
import "./Seasons.scss";
import { Link } from "react-router-dom";
import { Planets } from 'react-preloaders';

const api_key = "137436a3a883e2b94597a24e32d9d6b8";


const Seasons = ({ match }) => {


    const [season, getSeason] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const [id, setId] = useState(match.params.id);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setId(match.params.id);
    })



    if (season.episodes) {
        return (
            <>
                <div className="season-details">
                    <div className="details">
                        <div className="left-section">
                            <div className="poster">
                                <img src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} alt="" />
                            </div>
                        </div>

                        <div className="right-section">

                            <div className="right-details">
                                <div className="title">
                                    <h1>
                                        {season.name}
                                    </h1>
                                </div>

                                {season.overview ?
                                    <div className="overview">
                                        <div className="left">
                                            <h2>Overview</h2>
                                        </div>
                                        <div className="right">
                                            <p>{season.overview}</p>
                                        </div>
                                    </div>
                                    : ""}
                                {/* {episodes.length === 0 ? "" :
                                    <div className="episodes">
                                        <div className="top">
                                            <h2>Episodes</h2>
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
                                } */}

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
            <div className="season-details"></div>
        )
    }
}


export default Seasons;