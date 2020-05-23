import React, { useState } from 'react'

import './social-networks.styles.scss'

import fb from './assets/facebook.png'
import Gplus from './assets/google-plus1.png'
import linkedin from './assets/linkedin1.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'

export default function SocialNetworks() {
    const [state, setState] = useState([
        fb, Gplus, linkedin, instagram, twitter
    ])

    const func = () => Math.random()

    return (
        <div className='main'>
            {state.map(icon => {
                return (
                    <div className='image_holder' key={func()} >
                        <img src={icon} alt="icons" className='icons' />
                    </div>
                )
            })}
        </div>
    )
}
