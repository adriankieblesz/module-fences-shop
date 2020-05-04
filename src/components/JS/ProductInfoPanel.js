import React from 'react';
import '../SCSS/ProductInfoPanel.scss';
const ProductInfoPanel = ({ url, number, name, width, height, material, spanCount, price }) => {
    return (
        <div id="product-info-panel">
            <div className="info-container">
                <img src={url} alt="" />
                <div className="info-details">
                    <p><strong>Number</strong>: {number}</p>
                    <p><strong>Name</strong>: {name}</p>
                    <p><strong>Width</strong>: {width}cm</p>
                    <p><strong>Height</strong>: {height}cm</p>
                    <p><strong>Material</strong>: {material}</p>
                    <p><strong>Spans</strong>: {spanCount}</p>
                    <p><strong>Price</strong>: {price}$</p>
                </div>
            </div>
        </div>
    );
}

export default ProductInfoPanel;