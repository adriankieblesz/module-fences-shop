import React from 'react';
import '../SCSS/Services.scss';
const ServicesItem = ({ photo, header, text }) => {
    return (
        <div className="service-item">
            <div className="service-inner">
                <div className="service-inner-description">
                    <img src={photo} alt="" />
                    <h2>{header}</h2>
                </div>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default ServicesItem;