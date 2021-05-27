import React, { useState, useEffect } from 'react'
import "./Slider.scss";
import Card from "../Card/Card"

const Slider = ({ items }) => {
    const [sliderPos, setSliderPos] = useState(40)
    const [stopSlide, setStopSlide] = useState(false)
    let sliding

    const slideRight = () => {
        if (Math.abs(sliderPos) + window.innerWidth < 5000) {
            setSliderPos(sliderPos - 250)
        } else {
            setSliderPos(40)
        }
        console.log(Math.abs(sliderPos) + window.innerWidth)

    }

    useEffect(() => {
        if (!stopSlide) {
            sliding = setInterval(() => {
                slideRight()
            }, 2000);
            return () => clearInterval(sliding);
        }
    }, [sliderPos]);

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
                <div className="slider-cards-container" style={{ left: `${sliderPos}px` }}>
                    {items.map(item => (
                        <Card cardData={item}
                            key={`${item.id} ${item.name ? item.name : item.title} `} />
                    ))}
                </div>
            </div>
            {/* <button className="left-slider" onClick={() => {
                if (sliderPos < 90) {
                    setSliderPos(sliderPos + 250)
                }
            }
            }
            ><i ><ArrowForwardIos className="icon" /></i></button>
            <button className="right-slider" onClick={() => slideRight()}
            ><i ><ArrowForwardIos className="icon" /></i></button> */}
        </div>


    )
}

export default Slider;