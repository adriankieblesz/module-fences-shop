import React from 'react';
import '../SCSS/ProductList.scss';
import ProductListItem from './ProductListItem';
const ProductList = ({ products, handleImageClick }) => {
    return (
        <div className="product-list scrollbar">
            <div className="list-box">
                {products.map(product => <ProductListItem
                    key={product.id}
                    url={product.url}
                    name={product.name}
                    handleImageClick={() => handleImageClick(product.url)}
                />)}
            </div>
        </div>
    );
}

export default ProductList;