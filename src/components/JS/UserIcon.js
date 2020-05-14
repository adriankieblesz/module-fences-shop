import React from 'react';
import "../SCSS/UserIconsPanel.scss";
const UserIcon = ({ className, content, icon, orderCounter }) => {
    return (
        <div className={`user-icon ${className}`}>
            <img src={icon} alt="" />
            <p>{content}</p>
            {orderCounter}
        </div>
    );
}

export default UserIcon;