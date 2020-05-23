import React from 'react';

import SlideShow from './slideshow.homepage'

import './homepage.styles.scss'

const IntroText = () => (<>
    {/* <marquee behavior="static" direction="up" speed='10'> */}
    This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.
    This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.

    This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.
    <br />
    This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.
    <br /><br />This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.
    This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.
    <br /><br /><br />
    <span className='span1'>
        This is the introduction abput the school and few information that the
        students need to know concerning the section and the terms of the
        school. Basically all neccessary information that must first be know
        can be placed here.
    </span>

    This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.
    <br />
    This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.
    <br /><br />This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.
    This is the introduction abput the school and few information that the
    students need to know concerning the section and the terms of the
    school. Basically all neccessary information that must first be know
    can be placed here.
    <br /><br /><br />
    <span className='span1'>
        This is the introduction abput the school and few information that the
        students need to know concerning the section and the terms of the
        school. Basically all neccessary information that must first be know
        can be placed here.
    </span>
    {/* </marquee> */}
</>
);




const HomePage = () => {
    return (
        <div className="homepage">

            <h1 className='title'>WELCOME TO CHRIST THE HOPE NURSERY AND PRIMARY SCHOOL</h1>

            <div className="container">
                <section className="introduction_text">
                    <p className="text">
                        <IntroText />
                    </p>
                </section>

                <section className="picture">
                    <SlideShow />
                </section>
            </div>
            {/* <section className="picture1">
                <SlideShow />
            </section> */}
        </div>
    );
}

export default HomePage;