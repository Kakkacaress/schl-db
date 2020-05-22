import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'

import Logo from '../../assets/logo.png'

import { auth } from '../../firebase/firebase.utils'


const Header = ({ currentUser }) => (
    <div className='header_container'>
        <div className='logo_div'>
            <Link to='/'>  <img src={Logo} alt="Logo" className='logo' /></Link>
        </div>
        <div className='navBar' >
            <ul className='ul' >
                <Link to='register' className='li' >Register</Link>
                {/* <Link to='sign-in' className='li' >Sign in</Link> */}

                {
                    currentUser ?
                        <div className='li' onClick={() => auth.signOut()} >Sign Out</div>
                        :
                        <Link to='sign-in' className='li' >Sign in</Link>}

                <Link to='contact' className='li' >Contact</Link>
            </ul>
        </div>

    </div>
)


export default Header