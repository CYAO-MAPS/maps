import React from 'react';
import './ContactUs.css'

function ContactUs() {
    return (
        <div>
            <div className="contactus-container">
                <div className = "contactus-image">
                    <img src="https://source.unsplash.com/random/250x250?sig=2"/>
                </div>
                <div className="contacus-title">
                    <h2>Contact Us</h2>
                    <p>Address
                        Email
                        etc.</p>
                </div>

            </div>
        </div>
    );
}

export default ContactUs;