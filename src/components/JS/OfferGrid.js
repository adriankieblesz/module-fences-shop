import React from 'react';
import Product from './Product';
import '../SCSS/OfferGrid.scss';
import '../SCSS/Product.scss';

const OfferGrid = ({ products, buyClick, infoClick }) => {
    return (
        <div className="offer-grid">
            {products.map(product => <Product
                key={product.id}
                url={product.url}
                name={product.name}
                price={product.price}
                buyClick={() => buyClick(product)}
                infoClick={() => infoClick(product)}
            />)}
        </div>
    );
}

export default OfferGrid;
