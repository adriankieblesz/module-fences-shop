import React from 'react';
import Product from './Product';
import '../SCSS/OfferGrid.scss';
import '../SCSS/Product.scss';

const OfferGrid = ({ products }) => {
    return (
        <div className="offer-grid">
            {products.map(product => <Product
                key={product.id}
                url={product.url}
                name={product.name}
                price={product.price}
                buyClick={() => product.buyClick(product.id)}
            />)}
        </div>
    );
}

export default OfferGrid;
