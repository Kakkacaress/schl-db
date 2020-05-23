import React from 'react';
import { Fade } from 'react-slideshow-image';

import './slideshow.styles.scss'

import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img2.jpg';
import image3 from '../../assets/img3.jpg';
import image4 from '../../assets/img4.jpg';
import image5 from '../../assets/img5.jpeg';
import image6 from '../../assets/img6.jpg';
import image7 from '../../assets/img7.jpg';
import image8 from '../../assets/img8.jpeg';
import image9 from '../../assets/img9.jpeg';
import image10 from '../../assets/img10.jpg';
import image11 from "../../assets/logo.png";


const fadeImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,];


const fadeProperties = {

    duration: 10000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    // onChange: (oldIndex, newIndex) => {
    //     console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    // }
}


const Slideshow = () => {
    return (
        <div className="slide-container picture" >
            <Fade {...fadeProperties}>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[0]} alt='' />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} alt='' />
                    </div>

                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[2]} alt='' />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[3]} alt='' />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[4]} alt='' />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[5]} alt='' />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[6]} alt='' />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[7]} alt='' />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[8]} alt='' />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[9]} alt='' />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[10]} alt='' />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[11]} alt='' />
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Slideshow;