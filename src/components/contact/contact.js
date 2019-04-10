import React, { Component } from 'react';

import './contact.scss';

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        mesage: ''
    };

    getName = (e) => {

        const {value} = e.target;
        this.setState({
            name: value
        }, () => console.log(this.state.name));

    };

    getEmail = (e) => {

      const {value} = e.target;
      this.setState({
          email: value
      }, () => console.log(this.state.email));

  };

  getMesage = (e) => {

    const {value} = e.target;
    this.setState({
        mesage: value
    }, () => console.log(this.state.mesage));

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
                                placeholder="Name"
                                defaultValue={name}
                                onChange={this.getName}
                            />
                            <input 
                                type="text"
                                placeholder="Email"
                                defaultValue={email}
                                onChange={this.getEmail}
                            />
                            <textarea 
                                placeholder="Send a mesage"
                                defaultValue={mesage}
                                onChange={this.getMesage}
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