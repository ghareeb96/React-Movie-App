import React from 'react'
import "./Item.scss";
import { Link } from "react-router-dom";




const Item = (props) => {

    return (
        <div className={`item ${props.type}`} id={`${props.item.id}`}>
            <div className="img">
                {props.item.poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`} alt="poster" />
                    :
                    <img src={`https://image.tmdb.org/t/p/w500${props.item.profile_path}`} alt="poster" />
                }
                <div className="popup">
                    <h2>
                        {props.item.name ?
                            props.item.original_name ? props.item.original_name : props.item.name
                            : props.item.original_title}
                    </h2>
                </div>
            </div>

            <Link to={`/${props.item.first_air_date ? "TVShows" :
                // props.item.episode_count ? `Seasons` :
                props.item.known_for_department ? "Persons" :
                    "Movies"}/${props.item.id}`}
            >
                <button className="details-btn">More Details</button>
            </Link>
        </div>
    )
}

export default Item;