import React from 'react'
import "./CardsContainer.scss";
import Card from "../Card/Card"


const CardsContainer = ({ items }) => {


    return (
        <div className="cards-section">
            <div className="cards-container">

                {items.filter(item => (item.poster_path || item.profile_path))
                    .filter(item => item.original_language !== "ja")
                    .map((item) => (
                        <Card
                            cardData={item}
                            // type={`${item.first_air_date ? "tvShow" :
                            //     item.known_for_department ? "person" : "movie"}`}
                            key={`${item.id} ${item.name ? item.name : item.title} `}
                        // detailsId={detailsId}
                        />
                    ))}
                {/* <div className="scroll-handler" id={`${scroll_type === "movie" ? "movie" : "tv"}`} style={{ top: (window.scrollY - 94) + "px" }}></div> */}
            </div>
        </div>
    )
}

export default CardsContainer;