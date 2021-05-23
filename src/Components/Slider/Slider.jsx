import React, { useState } from 'react'
import "./Slider.scss";
import Card from "../Card/Card"
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const Slider = ({ items }) => {
    const [sliderPos, setSliderPos] = useState(90)

    return (
        <div className="slider">
            <div className="slider-content">
                <div className="cards-container" style={{ left: `${sliderPos}px` }}>
                    {items.map(item => (
                        <Card cardData={item} />
                    ))}
                </div>
            </div>
            <button className="left-slider" onClick={() => {
                if (sliderPos < 90) {
                    setSliderPos(sliderPos + 500)
                }
            }
            }
            ><i className="icon"><ArrowBackIos /></i></button>
            <button className="right-slider" onClick={() => {
                if (sliderPos > -3490) {

                    setSliderPos(sliderPos - 500)
                }
            }
            }
            ><i className="icon"><ArrowForwardIos /></i></button>
        </div>


    )
}

export default Slider;