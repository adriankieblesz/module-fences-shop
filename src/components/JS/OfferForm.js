import React from 'react';
import '../SCSS/OfferForm.scss';
const OfferForm = ({ handleTypeChange, handleMaterialChange, handleOnChange, handlePriceChange }) => {
    return (
        <form id="offer-form" action="" onSubmit={(e) => e.preventDefault()}>
            <label id="labelType" htmlFor="type">Type</label>
            <select name="" id="type" onChange={handleTypeChange}>
                <option value="0">All</option>
                <option value="1">Fence</option>
                <option value="2">Gate</option>
            </select>
            <label id="labelMaterial" htmlFor="material">Material</label>
            <select name="" id="material" onChange={handleMaterialChange}>
                <option value="0">All</option>
                <option value="1">Metal</option>
                <option value="2">Wood</option>
            </select>
            <label id="labelPrice" htmlFor="price">Price</label>
            <select name="" id="price" onChange={handlePriceChange}>
                <option value="0">Ascending</option>
                <option value="1">Descending</option>
            </select>
            <label id="labelSearch" htmlFor="search"></label>
            <input id="search" type="text" placeholder="Search" onChange={handleOnChange} />
        </form>
    );
}

export default OfferForm;