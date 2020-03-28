import React from 'react';
import '../SCSS/About.scss';
import image from '../../images/icons/fence.png';

const About = () => {
    return (
        <section id="about">
            <div className="about-grid">
                <div className="about-grid-item">
                    <h2>What are module fences?</h2>
                    <img src={image} alt="fence-icon" />
                    <img src={image} alt="fence-icon" />
                    <img src={image} alt="fence-icon" />
                </div>
                <div className="about-grid-item">
                    <p>INNOVATIVE and original approach for designing and mounting moder fences. Created for people who value quality and style connected with safety and reliability.</p>
                </div>
            </div>
        </section>
    );
}

export default About;