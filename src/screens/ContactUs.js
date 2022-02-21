import React from 'react';
import './ContactUs.css'
import graphic_contact_us from '../graphics/contact_us.svg'


function ContactUs() {
    return (
        
        <div className="contactus-container">
                <h2 className="contactus-title">Contact Us</h2>
                <div className='contactus-content'>
                    <div className = "contactus-image">
                        <img src={graphic_contact_us}/>
                    </div>
                    <div className='contactus-address-container'>
                    <address className='contactus-text'>
                        <h4 className='contactus-name'>MAPS</h4>
                        <div className='contactus-address'>
                        8-244 Brockport DR, <br/>
                        Toronto, On, <br/>
                        Canada <br/>
                        M9W 6X9<br/>
                        <a href = "mailto:info@maps-power.com">info@maps-power.com</a>
                        </div>
                        </address>
                    </div>
                </div>
        </div>

    );
}

export default ContactUs;