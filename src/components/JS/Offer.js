import React, { Component } from 'react';
import OfferGrid from './OfferGrid';
import OfferForm from './OfferForm';
import '../SCSS/Offer.scss';
class Offer extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        let products = [];
        for (let i = 0; i < 9; i++) {
            products.push({
                id: i + 1,
                url: require(`../../images/fence-models/type-${i + 1}.png`),
                name: `Type ${i + 1}`,
                price: (100 + 10 * i),
                buyClick: this.handleBuyClick
            });
        }
        this.setState({ products })
        console.log(this.state.products)
    }
    handleBuyClick = (id) => {
        alert(`Id of this product ${id}`);
    }
    render() {

        return (
            <section id="offer">
                <h1>Offer</h1>
                <p className="offer-description">In our extensive offer you can find everything according to your needs. We offer fences made of two types of materials (metal, wood) in various style variants.</p>
                <OfferForm />
                <OfferGrid products={this.state.products} />
            </section>
        );
    }
}

export default Offer;