import React from 'react';
import '../SCSS/ProductListItem.scss';
const ProductListItem = ({ url, name, handleImageClick }) => {
    return (
        <div className="product-list-item">
            <div className="list-item-inner" onClick={handleImageClick}>
                <p>{name}</p>
            </div>
            <img className="list-item-picture" src={url} alt="" />
        </div>
    );
}

export default ProductListItem;