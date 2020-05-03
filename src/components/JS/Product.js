import React from 'react';
import buy from '../../images/icons/buy.png';
import info from '../../images/icons/info30.png';
import '../SCSS/Product.scss';

const Product = ({ url, name, price, buyClick }) => {
    return (
        <div className="product">
            <img className="product-image" src={url} alt="" />
            <h4>{name}</h4>
            <div className="product-inner">
                <p className="product-price">Price: {price}$</p>
                <img className="product-info" src={info} alt="" title="info" />
                <img className="product-buy" src={buy} alt="" onClick={buyClick} />
            </div>
        </div>
    );
}

export default Product;