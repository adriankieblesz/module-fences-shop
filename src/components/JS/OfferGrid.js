import React, { Component } from 'react';
import buy from '../../images/icons/buy.png';
import info from '../../images/icons/info30.png';
import '../SCSS/OfferGrid.scss';
import '../SCSS/Product.scss';
class OfferGrid extends Component {
    state = {}
    render() {
        return (
            <div className="offer-grid">
                <div className="product">
                    <img className="product-image" src={require("../../images/fence-models/type-1.png")} alt="" />
                    <h4>Type 1</h4>
                    <div className="product-inner">
                        <p className="product-price">Price: 100$</p>
                        <img src={info} alt="" />
                        <img src={buy} alt="" />
                    </div>
                </div>
                <div className="product">
                    <img className="product-image" src={require("../../images/fence-models/type-2.png")} alt="" />
                    <h4>Type 2</h4>
                </div>
                <div className="product">
                    <img className="product-image" src={require("../../images/fence-models/type-3.png")} alt="" />
                    <h4>Type 3</h4>
                </div>
                <div className="product">
                    <img className="product-image" src={require("../../images/fence-models/type-4.png")} alt="" />
                    <h4>Type 4</h4>
                </div>
                <div className="product">
                    <img className="product-image" src={require("../../images/fence-models/type-5.png")} alt="" />
                    <h4>Type 5</h4>
                </div>
                <div className="product">
                    <img className="product-image" src={require("../../images/fence-models/type-6.png")} alt="" />
                    <h4>Type 6</h4>
                </div>
                <div className="product">
                    <img className="product-image" src={require("../../images/fence-models/type-7.png")} alt="" />
                    <h4>Type 7</h4>
                </div>
                <div className="product">
                    <img className="product-image" src={require("../../images/fence-models/type-8.png")} alt="" />
                    <h4>Type 8</h4>
                </div>
                <div className="product">
                    <img className="product-image" src={require("../../images/fence-models/type-9.png")} alt="" />
                    <h4>Type 9</h4>
                </div>

            </div>
        );
    }
}

export default OfferGrid;