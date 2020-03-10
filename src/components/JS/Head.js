import React, { Component } from 'react';
import Navigation from "./Navigation";
import '../SCSS/Head.scss';

class Head extends Component {
    state = {
        navbarChange: false
    }
    handleScroll = () => {
        window.scrollY > 20 ? this.setState(() => ({
            navbarChange: true
        })) :
            this.setState(() => ({
                navbarChange: false
            }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        const { navbarChange } = this.state;
        return (
            <div id="head">
                <Navigation change={navbarChange} />
            </div>
        );
    }
}

export default Head;