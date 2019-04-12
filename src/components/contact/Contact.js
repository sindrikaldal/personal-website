import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
        <div id="contact">
            <div className="contactContainer">
                <ul>
                    <li><a href="https://m.me/sindrikaldal"><i className="fab fa-facebook-messenger fa-3x"></i></a></li>
                    <li><a href="https://github.com/sindrikaldal"><i className="fab fa-github fa-3x"></i></a></li>
                    <li><a href="https://linkedin.com/in/sindrikaldal"><i className="fab fa-linkedin-in fa-3x"></i></a></li>
                    <li><a href="mailto:sindrimars@gmail.com"><i className="far fa-envelope fa-3x"></i></a></li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Contact;
