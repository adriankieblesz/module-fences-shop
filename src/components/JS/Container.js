import React, { Component } from 'react';
import Head from './Head';
import UserIconsPanel from './UserIconsPanel';
import About from './About';
import Offer from './Offer';
import Services from './Services';
import Contact from './Contact';
class Container extends Component {
    state = {
        products: [],
        fences: [],
        gates: [],
        order: [],
        orderAmount: 0
    }
    componentDidMount() {
        let fences = [];
        for (let i = 0; i < 10; i++) {
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
            });
        }
        let gates = [];
        for (let i = 0; i < 10; i++) {
            gates.push({
                id: i + 11,
                number: `TG000${i + 1}`,
                type: "gate",
                url: require(`../../images/gate-models/type-${i + 1}.png`),
                name: `Type G${i + 1}`,
                width: (100 + 5 * i),
                height: 120,
                material: "Wood",
                spanCount: 2,
                price: (100 + 10 * i),
            });
        }

        let products = fences.concat(gates);
        this.setState({
            products,
            fences,
            gates,
        });

        // let order = [];
        // order.push({
        //     orderId: 1,
        //     fence: {
        //         number: `TF0002`,
        //         type: "fence",
        //         url: require(`../../images/fence-models/type-2.png`),
        //         name: `Type F2`,
        //         width: 105,
        //         height: 120,
        //         material: "Metal",
        //         spanCount: 2,
        //         price: 110,
        //     },
        //     amount: 10
        // })
        // this.setState({
        //     order
        // })
    }
    handleAddOrder = (details, amount) => {
        if (amount > 0) {
            let order = [];
            order.push({
                number: details.number,
                type: details.type,
                url: details.url,
                name: details.name,
                width: details.width,
                height: details.height,
                material: details.material,
                spanCount: details.spanCount,
                price: details.price,
                amount: amount
            })
            this.setState((prevState) => ({
                order: prevState.order.concat(order)
            }));
        }
    }
    componentDidUpdate() {
        let amountSum = 0;
        for (let i = 0; i < this.state.order.length; i++) {
            amountSum += this.state.order[i].amount
        }
        if (this.state.orderAmount !== amountSum) {
            this.setState(() => ({
                orderAmount: amountSum
            }))
        }

    }
    render() {
        console.log(this.state.order);
        console.log(this.state.orderAmount);
        return (
            <React.Fragment>
                <Head />
                <UserIconsPanel orderAmount={this.state.orderAmount} />
                <About />
                <Services />
                <Offer
                    products={this.state.products}
                    fences={this.state.fences}
                    gates={this.state.gates}
                    addOrder={this.handleAddOrder}
                />
                <Contact />
            </React.Fragment>
        );
    }
}

export default Container;