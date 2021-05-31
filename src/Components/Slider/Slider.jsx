import React, { useState, useEffect, useRef } from 'react'
import "./Slider.scss";
import Card from "../Card/Card"

const Slider = ({ items }) => {
    const [sliderPos, setSliderPos] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(null)
    const [slider, setSlider] = useState(null)
    const [stopSlide, setStopSlide] = useState(false)
    let sliding

    const slideRight = () => {
        if (Math.abs(sliderPos) + window.innerWidth < sliderWidth) {
            setSliderPos(sliderPos - sliderWidth / slider.children.length)
        } else {
            setSliderPos(0)
        }
    }

    useEffect(() => {
        if (sliderWidth === null) {
            const getWidth = setTimeout(() => {
                setSliderWidth(slider.getBoundingClientRect().width)
            },
                2000)
            return () => clearTimeout(getWidth)
        }
    }, [slider]);


    useEffect(() => {
        if (!stopSlide) {
            sliding = setInterval(() => {
                slideRight()
            }, 2000);
            return () => clearInterval(sliding);
        }
    }, [sliderPos, sliderWidth]);

    return (
        <div className="slider">
            <div

                className="slider-content"
                onMouseEnter={() => {
                    setStopSlide(true)
                    clearInterval(sliding)
                }
                }
                onMouseLeave={() => {
                    setStopSlide(false)
                    slideRight()
                }}
            >
                <div
                    className="slider-cards-container"
                    style={{ left: `${sliderPos}px` }}
                    ref={(el) => {
                        setSlider(el)
                    }}
                >
                    {items.filter(item => (item.poster_path || item.profile_path))
                        .map(item => (
                            <Card cardData={item}
                                key={`${item.id} ${item.name ? item.name : item.title} `} />
                        ))}
                </div>
            </div>
        </div>


    )
}

export default Slider;