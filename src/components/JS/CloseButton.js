import React from 'react';
import '../SCSS/CloseButton.scss';
const CloseButton = ({ modalCloseClick }) => {
    return (
        <div id="close-button" onClick={modalCloseClick}>
            <span className="close-btn-bar"></span>
            <span className="close-btn-bar"></span>
        </div>
    );
}

export default CloseButton;