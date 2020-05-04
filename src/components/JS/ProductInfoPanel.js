import React from 'react';
import '../SCSS/ProductInfoPanel.scss';
const ProductInfoPanel = ({ url, number, name, width, height, material, spanCount, price }) => {
    return (
        <div id="product-info-panel">
            <div className="info-container">
                <img src={url} alt="" />
                <div className="info-details">
                    <p>Number: {number}</p>
                    <p>Name: {name}</p>
                    <p>Width: {width}cm</p>
                    <p>Height: {height}cm</p>
                    <p>Material: {material}</p>
                    <p>Spans: {spanCount}</p>
                    <p>Price: {price}$</p>
                </div>
            </div>
        </div>
    );
}

export default ProductInfoPanel;