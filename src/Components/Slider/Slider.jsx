import React, { useState, useEffect } from 'react'
import "./Slider.scss";
import { ReactComponent as RightArrow } from './right-arrow.svg'
import { ReactComponent as LeftArrow } from './left-arrow.svg'
import Card from "../Card/Card"

const Slider = ({ items, container, fullWidth }) => {

    const initialPosition = 
    fullWidth ? (window.innerWidth <= 800 ? 50 : 100)
        : 50
    
    const [sliderPosition, setSliderPosition] = useState(initialPosition)

    const renderedItems =
        window.innerWidth <= 600 ? 1 :
            window.innerWidth <= 800 ? 2 :
                window.innerWidth <= 1000 ? 3 :
                    window.innerWidth <= 1200 ? 4 : 5


    const cardWidth = fullWidth ?
        window.innerWidth <= 800 ? (window.innerWidth - 100) / renderedItems : (window.innerWidth - 200) / renderedItems
        :
        (document.getElementById(container)?.clientWidth - 100) / renderedItems



    const leftSlide = () => {
        if (sliderPosition < 50) {
            setSliderPosition(sliderPosition + cardWidth)
        }
    }

    const rightSlide = () => {
        if(fullWidth){
            if (Math.abs(sliderPosition - window.innerWidth) >= document.querySelector(".slider-items").getBoundingClientRect().width) {
                setSliderPosition(initialPosition)
            }
            else {
                setSliderPosition(sliderPosition - cardWidth)
            }
        }else{
            const cardWidth = ((document.getElementById(container)?.clientWidth - 100) / renderedItems)

            if (Math.abs(sliderPosition - document.getElementById(container)?.clientWidth) >= document.querySelector(".slider-items").getBoundingClientRect().width) {
                setSliderPosition(initialPosition)
            }
            else {
                setSliderPosition(sliderPosition - cardWidth)
            }
        }
    }



    useEffect(() => {
        let sliding = setInterval(() => {
            rightSlide()
        }, 4000);
        return () => clearInterval(sliding)
    }, [sliderPosition]);


    return (


        <div className="slider">
            <div className="arrow-container left-arrow-container" onClick={leftSlide}>
                <LeftArrow className='icon left-arrow' />
            </div>
            <div className="arrow-container right-arrow-container" onClick={rightSlide}>
                <RightArrow className='icon right-arrow' />
            </div>

            <div className="slider-items" style={{ transform: `translateX(${sliderPosition}px)` }}>
                {
                    items.filter(item => (item.poster_path || item.profile_path))
                        .map(item => (
                            <div className="card-container" style={{ width: cardWidth }}>

                                <Card cardData={item}
                                    key={`${item.id} ${item.name ? item.name : item.title} `} />
                            </div>
                        ))
                }
            </div>
        </div>

    )
}

export default Slider;