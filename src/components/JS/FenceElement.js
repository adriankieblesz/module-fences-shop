import React from 'react';
import '../SCSS/FenceElement.scss';
const FenceElement = ({ index, url, top, left, width, handleFenceElementRightClick }) => <img style={{
    top,
    left,
    width
}}
    data-index={index}
    className="fence-element"
    src={url}
    alt=""
    onMouseDown={handleFenceElementRightClick}
/>

export default FenceElement;