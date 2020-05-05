import React, { Component } from 'react';
import OfferGrid from './OfferGrid';
import OfferForm from './OfferForm';
import ModalWindow from './ModalWindow';
import ProductInfoPanel from './ProductInfoPanel';
import '../SCSS/Offer.scss';
class Offer extends Component {
    state = {
        products: [],
        fences: [],
        gates: [],
        filteredProducts: [],
        info: false,
        details: null,
        modalClassName: "slide",
        type: function () { },
        searchValue: "",
        material: "",
        priceStatement: this.descend
    }
    componentDidMount() {
        let fences = [];
        for (let i = 0; i < 24; i++) {
            fences.push({
                id: i + 1,
                number: `TF000${i + 1}`,
                type: "fence",
                url: require(`../../images/fence-models/type-${i + 1}.png`),
                name: `Type F${i + 1}`,
                width: (100 + 5 * i),
                height: 120,
                material: "Metal",
                spanCount: 2,
                price: (100 + 10 * i),
                buyClick: this.handleBuyClick,
                infoClick: this.handleInfoClick
            });
        }
        let gates = [];
        for (let i = 0; i < 10; i++) {
            gates.push({
                id: i + 25,
                number: `TG000${i + 1}`,
                type: "gate",
                url: require(`../../images/gate-models/type-${i + 1}.png`),
                name: `Type G${i + 1}`,
                width: (100 + 5 * i),
                height: 120,
                material: "Wood",
                spanCount: 2,
                price: (100 + 10 * i),
                buyClick: this.handleBuyClick,
                infoClick: this.handleInfoClick
            });
        }

        let products = fences.concat(gates);
        this.setState({
            products,
            fences,
            gates,
            type: (product) => product.type === "fence" || product.type === "gate",
        });

    }
    handleBuyClick = (id) => {
        alert(`Id of this product ${id}`);
    }
    handleInfoClick = (object) => {
        this.setState(() => ({
            info: true,
            details: object,
            modalClassName: "slide slide-left"
        }))
    }
    handleCloseModal = () => {
        this.setState(() => ({
            modalClassName: "slide"
        }));
        setTimeout(() => {
            this.setState(() => ({
                info: false
            }))
        }, 500);
    }
    handleTypeChange = (e) => {

        let type;
        switch (e.target.value) {
            case "1":
                type = (product) => product.type === "fence";
                break;
            case "2":
                type = (product) => product.type === "gate";
                break;
            case "0":
                type = (product) => product.type === "fence" || product.type === "gate";
                break;
            default:
                break;
        }
        this.setState(() => ({ type }));
    }
    handleInputSearchOnChange = (e) => {
        this.setState({
            searchValue: e.target.value,
        })
    }
    handlePriceChange = (e) => {
        this.ascend = (product) => product.price < 0;
        this.descend = (product) => product.price > 0;

        e.target.value > 0 ? this.setState(() => ({
            priceStatement: this.descend
        })) : this.setState(() => ({
            priceStatement: this.ascend
        }))
    }
    render() {
        const { products, details, type, info, searchValue, priceStatement } = this.state;
        // this.filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase())).sort(priceStatement);
        let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase())).filter(type).sort(priceStatement);
        console.log(filteredProducts);
        return (
            <section id="offer">
                <h1>Offer</h1>
                <p className="offer-description">In our extensive offer you can find everything according to your needs. We offer fences made of two types of materials (metal, wood) in various style variants.</p>
                <OfferForm
                    handleTypeChange={this.handleTypeChange}
                    handleOnChange={this.handleInputSearchOnChange}
                    handlePriceChange={this.handlePriceChange}
                />
                <OfferGrid products={filteredProducts} />
                {info && <ModalWindow
                    modalCloseClick={this.handleCloseModal}
                    className={this.state.modalClassName}
                    children={<ProductInfoPanel
                        url={details.url}
                        number={details.number}
                        name={details.name}
                        width={details.width}
                        height={details.height}
                        material={details.material}
                        spanCount={details.spanCount}
                        price={details.price}
                    />}
                />}
            </section>
        );
    }
}

export default Offer;