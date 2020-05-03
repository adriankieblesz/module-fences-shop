import React, { Component } from 'react';
import OfferGrid from './OfferGrid';
import '../SCSS/Offer.scss';

const Offer = () => {
    return (
        <section id="offer">
            <h1>Offer</h1>
            <p>In our extensive offer you can find everything according to your needs. We offer fences made of two types of materials (metal, wood) in various style variants.</p>
            <form id="offer-form" action="">
                <label id="labelType" htmlFor="type">Type</label>
                <select name="" id="type">
                    <option value="0">All</option>
                    <option value="1">Metal</option>
                    <option value="2">Wooden</option>
                </select>
                <label id="labelPrice" htmlFor="price">Price</label>
                <select name="" id="price">
                    <option value="0">Ascending</option>
                    <option value="1">Descending</option>
                </select>
                <label id="labelSearch" htmlFor="search"></label>
                <input id="search" type="text" placeholder="Search" />
            </form>
            <OfferGrid />
        </section>
    );
}

export default Offer;