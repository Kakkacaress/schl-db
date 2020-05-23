import React, { Component } from 'react'
import { contacts } from './contacts'

import './contact.styles.scss'


export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            contacts: contacts
        }
    }



    render() {
        let contactImages = this.state.contacts.map(({ id, img, name, email, phone }) => {
            return (
                <div className="container">
                    <div className="picture">
                        <img src={img} alt="" className="image" key={id} />
                    </div>
                    <div className="info">
                        <span className='details'>Name: {name} </span><br />
                        <span className='details'>Phone: {phone}</span><br />
                        <span className='details'>Email: {email} </span>
                    </div>
                </div>
            )
        })
        return (
            <div className='main'>
                <div className="contact">

                    {contactImages}

                    {/* <div className="container">
                        <div className="picture"><img src="" alt="" className="image" /></div>
                        <div className="info">{text}</div>
                    </div> */}

                    {/* <div className="container">
                        <div className="picture"><img src="" alt="" className="image" /></div>
                        <div className="info">{text}</div>
                    </div>

                    <div className="container">
                        <div className="picture"><img src="" alt="" className="image" /></div>
                        <div className="info">{text}</div>
                    </div>

                    <div className="container">
                        <div className="picture"><img src="" alt="" className="image" /></div>
                        <div className="info">{text}</div>
                    </div>

                    <div className="container">
                        <div className="picture"><img src="" alt="" className="image" /></div>
                        <div className="info">{text}</div>
                    </div> */}
                </div>
                <aside className="aside"></aside>

            </div>
        )
    }
}
