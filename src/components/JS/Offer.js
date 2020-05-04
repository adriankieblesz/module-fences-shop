import React, { Component } from 'react';
import OfferGrid from './OfferGrid';
import OfferForm from './OfferForm';
import ModalWindow from './ModalWindow';
import ProductInfoPanel from './ProductInfoPanel';
import '../SCSS/Offer.scss';
class Offer extends Component {
    state = {
        products: [],
        filteredProducts: [],
        info: false,
        details: null,
        modalClassName: "slide",
        searchValue: "",
        material: "",
        priceStatement: this.descend

    }
    componentDidMount() {
        let products = [];
        for (let i = 0; i < 24; i++) {
            products.push({
                id: i + 1,
                number: `T000${i}`,
                url: require(`../../images/fence-models/type-${i + 1}.png`),
                name: `Type ${i + 1}`,
                width: (100 + 5 * i),
                height: 120,
                material: "Metal",
                spanCount: 2,
                price: (100 + 10 * i),
                buyClick: this.handleBuyClick,
                infoClick: this.handleInfoClick
            });
        }
        this.setState({ products, filteredProducts: products })

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
    handleInputSearchOnChange = (e) => {
        this.setState({
            searchValue: e.target.value,
        })
    }
    handlePriceChange = (e) => {
        this.ascend = (product) => product.price < 1;
        this.descend = (product) => product.price > 1;

        e.target.value > 0 ? this.setState(() => ({
            priceStatement: this.descend
        })) : this.setState(() => ({
            priceStatement: this.ascend
        }))

    }
    render() {

        console.log(this.state.priceStatement)
        const { products, details, info } = this.state;
        let filteredProducts = products.filter(product => product.name.toLowerCase().includes(this.state.searchValue.toLocaleLowerCase())).sort(this.state.priceStatement);
        return (
            <section id="offer">
                <h1>Offer</h1>
                <p className="offer-description">In our extensive offer you can find everything according to your needs. We offer fences made of two types of materials (metal, wood) in various style variants.</p>
                <OfferForm
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