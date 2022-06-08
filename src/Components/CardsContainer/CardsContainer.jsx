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
                            key={`${item.id} ${item.name ? item.name : item.title} `}
                        />
                    ))}
            </div>
        </div>
    )
}

export default CardsContainer;