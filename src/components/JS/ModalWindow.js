import React from 'react';
import CloseButton from './CloseButton';
import '../SCSS/ModalWindow.scss';
const ModalWindow = ({ children, modalCloseClick, className }) => {
    return (
        <div id="modal-window" className={className}>
            {children}
            <CloseButton modalCloseClick={modalCloseClick} />
        </div>
    );
}

export default ModalWindow;