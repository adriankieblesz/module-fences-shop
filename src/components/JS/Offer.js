import React, { Component } from 'react';
import OfferGrid from './OfferGrid';
import OfferForm from './OfferForm';
import ModalWindow from './ModalWindow';
import ProductInfoPanel from './ProductInfoPanel';
import ProductBuyPanel from './ProductBuyPanel';
import Adjust from './Adjust';
import '../SCSS/Offer.scss';
class Offer extends Component {
    state = {
        info: false,
        buy: false,
        details: null,
        modalClassName: "slide",
        type: function () { },
        material: function () { },
        searchValue: "",
        priceStatement: this.descend,
        inputAmountValue: 0
    }

    componentDidMount() {

        this.setState({
            type: (product) => product.type === "fence" || product.type === "gate",
            material: (product) => product.material === "Metal" || product.material === "Wood"
        });
    }
    handleBuyClick = (object) => {
        this.setState(() => ({
            buy: true,
            details: object,
            modalClassName: "slide slide-left"
        }))
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
    handleMaterialChange = (e) => {
        let material;
        switch (e.target.value) {
            case "1":
                material = (product) => product.material === "Metal";
                break;
            case "2":
                material = (product) => product.material === "Wood";
                break;
            case "0":
                material = (product) => product.material === "Metal" || product.material === "Wood";
                break;
            default:
                break;
        }
        this.setState(() => ({ material }));
    }
    handleInputSearchOnChange = (e) => {
        this.setState({
            searchValue: e.target.value,
        })
    }
    handlePriceChange = (e) => {
        this.ascend = (product) => product.price < 0;
        this.descend = (product) => product.price > 1;

        e.target.value > 0 ? this.setState(() => ({
            priceStatement: this.descend
        })) : this.setState(() => ({
            priceStatement: this.ascend
        }))
    }
    handleInputAmountOnChange = (e) => {
        let value = e.target.value;
        this.setState(() => ({
            inputAmountValue: value
        }))
    }
    render() {

        const { details, type, material, info, buy, searchValue, priceStatement, } = this.state;
        const { products, fences, gates } = this.props;
        let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase())).filter(type).filter(material).sort(priceStatement);
        return (
            <section id="offer">
                <h1>Offer</h1>
                <p className="offer-description">In our extensive offer you can find everything according to your needs. We offer fences made of two types of materials (metal, wood) in various style variants.</p>
                <OfferForm
                    handleTypeChange={this.handleTypeChange}
                    handleMaterialChange={this.handleMaterialChange}
                    handleOnChange={this.handleInputSearchOnChange}
                    handlePriceChange={this.handlePriceChange}
                />
                <OfferGrid
                    products={filteredProducts}
                    buyClick={this.handleBuyClick}
                    infoClick={this.handleInfoClick}
                />
                {(info && <ModalWindow
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
                />) || (buy && <ModalWindow
                    modalCloseClick={this.handleCloseModal}
                    className={this.state.modalClassName}
                    children={<ProductBuyPanel
                        name={details.name}
                        url={details.url}
                        price={details.price * this.state.inputAmountValue}
                        inputAmountValue={this.state.inputAmountValue}
                        inputValueChange={this.handleInputAmountOnChange}
                        addOrder={() => this.props.addOrder(details, this.state.inputAmountValue)}
                    />}
                />)}
                <Adjust
                    fences={fences}
                    gates={gates}
                />
            </section>
        );
    }
}

export default Offer;