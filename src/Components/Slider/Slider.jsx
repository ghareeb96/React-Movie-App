import React, { useState, useEffect } from 'react'
import "./Slider.scss";
import Card from "../Card/Card"

const Slider = ({ items }) => {
    const [sliderPos, setSliderPos] = useState(40)



    const slideRight = () => {
        if (Math.abs(sliderPos) + window.innerWidth < 5000) {
            setSliderPos(sliderPos - 250)
        } else {
            setSliderPos(40)
        }

    }

    useEffect(() => {
        const sliding = setInterval(() => {
            slideRight()
        }, 2000);
        return () => clearInterval(sliding);
    }, [sliderPos]);

    return (
        <div className="slider">
            <div className="slider-content">
                <div className="cards-container" style={{ left: `${sliderPos}px` }}>
                    {items.map(item => (
                        <Card cardData={item} />
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