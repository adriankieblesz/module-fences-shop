import React from 'react';
import '../SCSS/OfferForm.scss';
const OfferForm = () => {
    return (
        <form id="offer-form" action="">
            <label id="labelType" htmlFor="type">Type</label>
            <select name="" id="type">
                <option value="0">All</option>
                <option value="1">Fence</option>
                <option value="2">Gate</option>
            </select>
            <label id="labelMaterial" htmlFor="material">Material</label>
            <select name="" id="material">
                <option value="0">All</option>
                <option value="1">Metal</option>
                <option value="2">Wood</option>
            </select>
            <label id="labelPrice" htmlFor="price">Price</label>
            <select name="" id="price">
                <option value="0">Ascending</option>
                <option value="1">Descending</option>
            </select>
            <label id="labelSearch" htmlFor="search"></label>
            <input id="search" type="text" placeholder="Search" />
        </form>
    );
}

export default OfferForm;