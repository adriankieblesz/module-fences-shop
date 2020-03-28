import React from 'react';
import '../SCSS/Title.scss';
import icon from '../../images/icons/down2.png';
const Title = () => {
    return (
        <div className="title">
            <h1>Innovative</h1>
            <h1>Module Fences</h1>
            <h1>For your home</h1>
            <button>
                <a href="#">
                    <span>Check offer</span>
                    <img src={icon} alt="icon-down" />
                </a>
            </button>
        </div>
    );
}

export default Title;