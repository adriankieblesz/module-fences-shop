import React from 'react';
import '../SCSS/ProductListItem.scss';
const ProductListItem = ({ url, name }) => {
    return (
        <div className="product-list-item">
            <div className="list-item-inner">
                <p>{name}</p>
            </div>
            <img className="list-item-picture" src={url} alt="" />
        </div>
    );
}

export default ProductListItem;