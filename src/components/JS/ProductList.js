import React from 'react';
import '../SCSS/ProductList.scss';
import ProductListItem from './ProductListItem';
const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            <div className="list-box">
                {products.map(product => <ProductListItem
                    url={product.url}
                    name={product.name}
                />)}
            </div>
        </div>
    );
}

export default ProductList;