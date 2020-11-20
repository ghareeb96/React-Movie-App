import React from 'react'
import "./ItemsContainer.scss";
import Item from "./Item/Item"


const ItemsContainer = (props) => {


    return (
        <div className="items-container">
            {props.items.filter(item => (item.poster_path || item.profile_path))
                .filter(item => item.original_language !== "ja")
                .map((item) => (
                    <Item
                        item={item}
                        type={`${item.first_air_date ? "tvShow" :
                            item.known_for_department ? "person" : "movie"}`}
                        key={`${item.id} ${item.name ? item.name : item.title} `}
                        detailsId={props.detailsId}
                    />
                ))}
            <div className="scroll-handler" id={`${props.scroll_type === "movie" ? "movie" : "tv"}`} style={{ top: (window.scrollY - 94) + "px" }}></div>
        </div>
    )
}

export default ItemsContainer;