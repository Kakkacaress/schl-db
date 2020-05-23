import React, { Component } from 'react'

import './contact.styles.scss'

let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque rerum delectus dolorem quae necessitatibus ipsam dicta hic! Minus beatae saepe quam reprehenderit! Rem asperiores recusandae, deserunt exercitationem aut unde"

export default class Contact extends Component {
    render() {
        return (
            <div className='main'>
                <div className="contact">
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
                    </div>

                    <div className="container">
                        <div className="picture"><img src="" alt="" className="image" /></div>
                        <div className="info">{text}</div>
                    </div>

                    <div className="container">
                        <div className="picture"><img src="" alt="" className="image" /></div>
                        <div className="info">{text}</div>
                    </div>
                </div>
                <aside className="aside"></aside>

            </div>
        )
    }
}
