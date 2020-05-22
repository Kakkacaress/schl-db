import React from 'react';
import { Fade } from 'react-slideshow-image';


import image1 from "../../assets/logo.png";
import image2 from '../../assets/bgnew.jpg'

const fadeImages = [
    image1,
    image2,
];

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
}

const Slideshow = () => {
    return (
        <div className="slide-container picture">
            <Fade {...fadeProperties}>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[0]} />
                    </div>
                    {/* <h2>First Slide</h2> */}
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} />
                    </div>

                    {/* <h2>Second Slide</h2> */}
                </div>
                {/* <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[2]} />
                    </div>
                    <h2>Third Slide</h2>
                </div> */}
            </Fade>
        </div>
    )
}

export default Slideshow;