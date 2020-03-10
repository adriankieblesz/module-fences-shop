import React, { Component } from 'react';
import '../SCSS/Navigation.scss';

class Navigation extends Component {

    render() {

        return (
            <nav className={`${this.props.change ? "navbar navbar-change" : "navbar"}`}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Offert</a>
                <a href="">Gallery</a>
                <a href="">Contact</a>
            </nav>
        );
    }
}

export default Navigation;

