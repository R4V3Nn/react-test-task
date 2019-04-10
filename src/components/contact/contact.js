import React, { Component } from 'react';

import './contact.scss';

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        mesage: ''
    };

    handleChange = (e) => {

        const {name, value} = e.target;
        this.setState({
            [name]: value
        });

    };

    showMesage = (e) => {

        e.preventDefault();
        console.table(this.state);
    }


    render() {

        const { name, email, mesage } = this.state;
        
        return (
            <section className="contact">
                <div className="container">
                    <h3 className="contact__heading">Contact</h3>
                    <div className="contact__content">
                        <div className="contact__inform">
                        <span>Phone number:</span>
                        <a href="tel:+38066-66-66-666">+38066-66-66-666</a>
                        <span>Email:</span>
                        <a href="mailto:mail@gmail.com">mail@gmail.com</a>
                        <span>Skype:</span>
                        <a href="skype:myskypeacc?call">mySkypeAcc</a>
                        </div>
                        <form className="contact__form">
                            <input 
                                type="text"
                                name="name" 
                                placeholder="Name"
                                value={name}
                                onChange={this.handleChange}
                            />
                            <input 
                                type="text"
                                name="email" 
                                placeholder="Email"
                                value={email}
                                onChange={this.handleChange}
                            />
                            <textarea
                                name="mesage" 
                                placeholder="Send a mesage"
                                value={mesage}
                                onChange={this.handleChange}
                            />
                            <button 
                                className="contact__btn"
                                onClick={this.showMesage}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}