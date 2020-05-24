import React from 'react';

import SlideShow from './slideshow/slideshow.homepage'
import { Information } from './information/info.homepage'

import './homepage.styles.scss'






const HomePage = () => {
    return (
        <div className="homepage">

            <h1 className='title'><span>WELCOME TO CHRIST THE HOPE NURSERY AND PRIMARY SCHOOL</span></h1>

            <div className="container">
                <section className="introduction_text">
                    <p className="text">
                        <Information />
                    </p>
                </section>

                <section className="picture">
                    <SlideShow />
                </section>
            </div>

        </div>
    );
}

export default HomePage;