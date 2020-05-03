import React, { Component } from 'react';
import OfferGrid from './OfferGrid';
import OfferForm from './OfferForm';
import '../SCSS/Offer.scss';

const Offer = () => {
    return (
        <section id="offer">
            <h1>Offer</h1>
            <p className="offer-description">In our extensive offer you can find everything according to your needs. We offer fences made of two types of materials (metal, wood) in various style variants.</p>
            <OfferForm />
            <OfferGrid />
        </section>
    );
}

export default Offer;