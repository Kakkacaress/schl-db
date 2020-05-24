import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './social-networks.styles.scss'

import fb from './assets/facebook.png'
import Gplus from './assets/google-plus1.png'
import linkedin from './assets/linkedin1.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'

export default function SocialNetworks() {
    const [state, setState] = useState([
        {
            icon: fb,
            link: 'http://www.facebook.com'
        },
        {
            icon: Gplus,
            link: 'http://www.plus.google.com'
        },
        {
            icon: linkedin,
            link: 'http://www.linkedin.com'
        },
        {
            icon: instagram,
            link: 'http://www.instagram.com'
        },
        {
            icon: twitter,
            link: 'http://www.twitter.com'
        }
    ])

    const func = () => Math.random()

    return (
        <div className='main'>
            {state.map(({ icon, link }) => {
                return (
                    <div className='image_holder' key={func()} >
                        <a href={link} >
                            <img src={icon} alt="icons" className='icons' />
                        </a>
                    </div>
                )
            })}
        </div>
    )
}
