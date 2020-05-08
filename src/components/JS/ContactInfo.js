import React from 'react';
import phone from '../../images/icons/phone24.png';
import mail from '../../images/icons/mail24.png';
import location from '../../images/icons/location24.png';
import '../SCSS/ContactInfo.scss';
const ContactInfo = () => {
    return (
        <div className="contact-info">
            <p>If you have anything you would like to tell us feel free to send us message! As a company we are open for new things and ideas coming from you.</p>
            <ul>
                <li>
                    <span>
                        <img src={phone} alt="" />
                        <p>0048 111 111 111</p>
                    </span>

                </li>
                <li>
                    <span>
                        <img src={mail} alt="" />
                        <p>mail@modulefences.com</p>
                    </span>
                </li>
                <li>
                    <img src={location} alt="" />
                    <span className="location-span">
                        <p>00-000</p>
                        <p>Fake street</p>
                        <p>Fake city</p>
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default ContactInfo;