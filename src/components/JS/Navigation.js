import React from 'react';
import '../SCSS/Navigation.scss';

const Navigation = ({ change }) => {
    return (
        <nav className={`${change ? "navbar navbar-change" : "navbar"}`}>

            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Offer</a>
            <a href="">Contact</a>
        </nav>
    );
}

export default Navigation;


