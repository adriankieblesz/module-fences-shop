import React from 'react';
import '../SCSS/Navigation.scss';

const Navigation = ({ change }) => {
    return (
        <nav className={`${change ? "navbar navbar-change" : "navbar"}`}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Offert</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
        </nav>
    );
}

export default Navigation;


