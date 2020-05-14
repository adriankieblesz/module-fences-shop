import React, { Component } from 'react';
import '../SCSS/ProductBuyPanel.scss';
// const ProductBuyPanel = ({ name, url, price }) => {
//     return (
//         <div id="product-buy-panel">
//             <div className="buy-container">
//                 <h2>{name}</h2>
//                 <img src={url} alt="" />
//                 <form action="" onSubmit={(e) => e.preventDefault()}>
//                     <label htmlFor="input-amount">Amount:</label>
//                     <input defaultValue="0" id="input-amount" min="0" max="100" type="number" name="" />
//                 </form>
//                 <p>Price: 120${price}</p>
//             </div>
//         </div>
//     );
// }

// export default ProductBuyPanel;
class ProductBuyPanel extends Component {
    state = {

    }

    handleInputAmountOnChange = (e) => {
        let value = e.target.value;
        this.setState(() => ({
            inputAmountValue: value
        }))
    }
    render() {

        return (
            <div id="product-buy-panel">
                <div className="buy-container">
                    <h2>{this.props.name}</h2>
                    <img src={this.props.url} alt="" />
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="input-amount">Amount:</label>
                        <input onChange={this.props.inputValueChange} defaultValue="0" id="input-amount" min="0" max="100" type="number" name="" />
                    </form>
                    <p>Price: {(this.props.price)}$</p>
                    <button onClick={this.props.addOrder} className="add-button">Add</button>
                </div>
            </div>
        );
    }
}

export default ProductBuyPanel;